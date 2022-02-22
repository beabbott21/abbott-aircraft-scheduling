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
        {rotation?.map(
          ({ id, origin, readable_departure, destination, readable_arrival }, index) => (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided: DraggableProvided) => (
                <S.Rotation
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  <S.Ident>Flight: {id}</S.Ident>
                  <S.Dep>{origin}</S.Dep>
                  <S.DepTime>{readable_departure}</S.DepTime>
                  <S.Arr>{destination}</S.Arr>
                  <S.ArrTime>{readable_arrival}</S.ArrTime>
                </S.Rotation>
              )}
            </Draggable>
          )
        )}
        {children}
      </S.List>
    </S.Rotations>
  );
};

export default Rotations;
