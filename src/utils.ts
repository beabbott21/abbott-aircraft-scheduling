import { Flight, Location } from './api/types';

export function move(
  source: Flight[],
  destination: Flight[],
  droppableSource: Location,
  droppableDestination: Location
) {
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
  return result;
}

export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const getInvalidPlacements = (rotation: Flight[]): number[] => {
  const invalidPlacements: number[] = [];
  for (let i = 1; i < rotation.length; i++) {
    const { origin, departuretime } = rotation[i];
    const { destination: prevDest, arrivaltime: prevArr } = rotation[i - 1];
    if (prevDest !== origin || departuretime - prevArr < 1200) {
      invalidPlacements.push(i);
    }
  }
  return invalidPlacements;
};

export const assignInvalids = (rotation: Flight[], invalids: number[]) =>
  rotation.map((r, i) => ({ ...r, ...{ isInvalid: invalids.includes(i) } }));

export const getSegmentWidth = (dep: number, arr: number) => (arr - dep) / 864;

export const getUtilisation = (rotation: Flight[]) =>
  Math.round(
    rotation.reduce<number>((total, r) => total + (r.arrivaltime - r.departuretime) + 1200, 0) / 864
  );
