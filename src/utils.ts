import { Flight, Location } from './api/types';

export function move(
  source: Flight[],
  destination: Flight[],
  droppableSource: Location,
  droppableDestination: Location
) {
  console.log('ds', droppableSource);
  console.log('dd', droppableDestination);
  console.log('s', source);
  console.log('d', destination);

  const sourceClone = [...source];
  const destClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [droppableId: string]: Flight[] } = {
    flights: [],
    rotations: []
  };
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  console.log('res', result);
  return result;
}

export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
