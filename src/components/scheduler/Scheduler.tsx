import { useEffect, useState } from 'react';
import * as S from './styles';
import Header from '../header/Header';
import Flights from '../flights/Flights';
import Rotations from '../rotations/Rotations';
import Aircrafts from '../aircrafts/Aircrafts';
import Timeline from '../timeline/Timeline';
import { useAircrafts, useFlights } from '../../api/useFetchData';
import { DragDropContext, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { Flight } from '../../api/types';
import { assignInvalids, getInvalidPlacements, move, reorder } from '../../utils';

const Scheduler = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [date, setDate] = useState<Date>(tomorrow);
  const [selectedAircraft, setSelectedAircraft] = useState<string>('');
  const [availableFlights, setAvailableFlights] = useState<Flight[]>([]);
  const [rotation, setRotation] = useState<Flight[]>([]);

  const { data: flights, loadMore: moreFlights } = useFlights();
  const { data: aircrafts } = useAircrafts();

  useEffect(() => {
    setAvailableFlights(availableFlights.concat(flights));
  }, [flights]);

  const handleMoreFlights = () => {
    moreFlights();
  };

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

    // drag within same list
    if (source.droppableId === destination.droppableId) {
      const flights = reorder<Flight>(
        getState(source.droppableId),
        source.index,
        destination.index
      );
      console.log(getInvalidPlacements(flights));
      if (source.droppableId === 'flights') {
        setAvailableFlights(flights);
      } else {
        setRotation(assignInvalids(flights, getInvalidPlacements(flights)));
      }
      // drag to new list
    } else {
      const result = move(
        getState(source.droppableId),
        getState(destination.droppableId),
        source,
        destination
      );

      setAvailableFlights(result['flights']);
      setRotation(assignInvalids(result['rotations'], getInvalidPlacements(result['rotations'])));
    }
  };

  return (
    <S.SchedulerPage>
      <Header date={date} setDate={setDate} />
      <Aircrafts
        aircrafts={aircrafts}
        selectedAircraft={selectedAircraft}
        selectAircraft={setSelectedAircraft}
        rotation={rotation}
      />
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
            <Flights
              flights={availableFlights}
              dRef={provided.innerRef}
              handleMoreFlights={handleMoreFlights}>
              {provided.placeholder}
            </Flights>
          )}
        </Droppable>
      </DragDropContext>
      <Timeline rotation={rotation} />
    </S.SchedulerPage>
  );
};

export default Scheduler;
