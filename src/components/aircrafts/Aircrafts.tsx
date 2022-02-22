import { Dispatch, SetStateAction } from 'react';
import { Aircraft } from '../../api/types';
import * as S from './styles';

const Aircrafts = ({
  aircrafts,
  selectedAircraft,
  selectAircraft
}: {
  aircrafts: Aircraft[];
  selectedAircraft: string;
  selectAircraft: Dispatch<SetStateAction<string>>;
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
              <span>58%</span>
            </S.Utilization>
          </S.Aircraft>
        ))}
      </S.List>
    </S.Aircrafts>
  );
};

export default Aircrafts;
