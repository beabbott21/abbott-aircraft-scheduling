import { Dispatch, SetStateAction } from 'react';
import { Aircraft, Flight } from '../../api/types';
import * as S from './styles';
import { getUtilisation } from '../../utils';

const Aircrafts = ({
  aircrafts,
  selectedAircraft,
  selectAircraft,
  rotation
}: {
  aircrafts: Aircraft[];
  selectedAircraft: string;
  selectAircraft: Dispatch<SetStateAction<string>>;
  rotation: Flight[];
}) => {
  return (
    <S.Aircrafts>
      <S.Header>Aircrafts</S.Header>
      <S.List>
        {aircrafts?.map((aircraft) => (
          <S.Aircraft
            key={aircraft.ident}
            onClick={() => selectAircraft(aircraft.ident)}
            isSelected={selectedAircraft === aircraft.ident}>
            <S.Utilization>
              <span>{aircraft.ident}</span>
              <span>{getUtilisation(rotation)}%</span>
            </S.Utilization>
          </S.Aircraft>
        ))}
      </S.List>
    </S.Aircrafts>
  );
};

export default Aircrafts;
