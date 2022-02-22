import * as S from './styles';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Flight } from '../../api/types';

const Rotations = ({
  rotation,
  aircraft,
  dRef,
  children
}: {
  rotation: Flight[];
  aircraft: string;
  dRef: any;
  children: React.ReactNode;
}) => {
  return (
    <S.Rotations>
      <S.Header>Rotation {aircraft}</S.Header>
      <S.List ref={dRef}>
        {aircraft ? (
          rotation?.map(
            (
              { id, origin, readable_departure, destination, readable_arrival, isInvalid },
              index
            ) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided: DraggableProvided, snapshot: any) => (
                  <S.Rotation
                    isInvalid={isInvalid}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    <S.Ident>Flight: {id}</S.Ident>
                    <S.Dep>{origin}</S.Dep>
                    <S.DepTime>{readable_departure}</S.DepTime>
                    <S.Arr>{destination}</S.Arr>
                    <S.ArrTime>{readable_arrival}</S.ArrTime>
                  </S.Rotation>
                )}
              </Draggable>
            )
          )
        ) : (
          <S.Message>Please Select an Aircraft</S.Message>
        )}
        {children}
      </S.List>
    </S.Rotations>
  );
};

export default Rotations;
