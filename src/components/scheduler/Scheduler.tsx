import { useEffect, useState } from 'react';
import * as S from './styles';
import Header from '../header/Header';
import Flights from '../flights/Flights';
import Rotations from '../rotations/Rotations';
import Aircrafts from '../aircrafts/Aircrafts';
import Timeline from '../timeline/Timeline';
import { useAircrafts, useFlights } from '../../api/useFetchData';
import { DragDropContext, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { AxiosResponse, Flight } from '../../api/types';
import { move, reorder } from '../../utils';

const Scheduler = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [date, setDate] = useState<Date>(tomorrow);
  const [selectedAircraft, setSelectedAircraft] = useState<string>('');
  const [availableFlights, setAvailableFlights] = useState<Flight[]>([]);
  const [rotation, setRotation] = useState<Flight[]>([]);

  const { data: flights, error: flightError, loading: flightsLoading } = useFlights();
  const { data: aircrafts, error: aircraftError, loading: aircraftLoading } = useAircrafts();
  console.log(availableFlights);

  useEffect(() => {
    setAvailableFlights(flights);
    console.log('flights effect');
  }, [flights]);

  const getState = (dropId: string) => {
    const droppables: { [id: string]: Flight[] } = {
      flights: availableFlights,
      rotations: rotation
    };
    return droppables[dropId];
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // don't do anything if dragging outside a droppable zone or attempting to reorder flights
    if (
      !destination ||
      (destination.droppableId === 'flights' && source.droppableId === 'flights')
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder<Flight>(getState(source.droppableId), source.index, destination.index);

      if (source.droppableId === 'flights') {
        setAvailableFlights(items);
      } else {
        setRotation(items);
      }
    } else {
      const result = move(
        getState(source.droppableId),
        getState(destination.droppableId),
        source,
        destination
      );
      console.log(result['flights'], result['rotations']);
      setAvailableFlights(result['flights']);
      setRotation(result['rotations']);
    }
  };

  return (
    <S.SchedulerPage>
      <Header date={date} setDate={setDate} />
      <Aircrafts
        aircrafts={aircrafts}
        selectedAircraft={selectedAircraft}
        selectAircraft={setSelectedAircraft}
      />
      <Timeline />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="rotations">
          {(provided: DroppableProvided) => (
            <Rotations dRef={provided.innerRef} aircraft={selectedAircraft} rotation={rotation}>
              {provided.placeholder}
            </Rotations>
          )}
        </Droppable>
        <Droppable droppableId="flights">
          {(provided: DroppableProvided) => (
            <Flights dRef={provided.innerRef} flights={availableFlights}>
              {provided.placeholder}
            </Flights>
          )}
        </Droppable>
      </DragDropContext>
    </S.SchedulerPage>
  );
};

export default Scheduler;
