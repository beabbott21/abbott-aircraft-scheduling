import React from 'react';
import * as S from './styles';
import { Flight } from '../../api/types';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

const Flights = ({
  flights,
  dRef,
  handleMoreFlights,
  children
}: {
  flights: Flight[];
  dRef: any;
  handleMoreFlights: any;
  children: React.ReactNode;
}) => {
  return (
    <S.Flights>
      <S.Header>Flights</S.Header>
      <S.ListContainer>
        <S.List ref={dRef}>
          {flights?.map(
            ({ id, origin, readable_departure, destination, readable_arrival }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided: DraggableProvided, snapshot: any) => (
                  <S.Flight
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    <S.Ident>{id}</S.Ident>
                    <S.Dep>{origin}</S.Dep>
                    <S.DepTime>{readable_departure}</S.DepTime>
                    <S.Arr>{destination}</S.Arr>
                    <S.ArrTime>{readable_arrival}</S.ArrTime>
                  </S.Flight>
                )}
              </Draggable>
            )
          )}
          {children}
        </S.List>
        <S.ButtonContainer>
          <S.MoreFlights onClick={handleMoreFlights}>More Flights</S.MoreFlights>
        </S.ButtonContainer>
      </S.ListContainer>
    </S.Flights>
  );
};

export default Flights;
