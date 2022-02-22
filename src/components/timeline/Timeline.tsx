import { Flight } from '../../api/types';
import * as S from './styles';
import { getSegmentWidth } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

const Timeline = ({ rotation }: { rotation: Flight[] }) => {
  const segments: S.SegmentProps[] = [];
  segments.push({ color: 'grey', width: getSegmentWidth(0, rotation[0]?.departuretime) + '%' });
  rotation?.forEach((f, i, r) => {
    segments.push({
      color: f.isInvalid ? 'red' : 'green',
      width: getSegmentWidth(f.departuretime, f.arrivaltime) + '%'
    });
    if (r[i + 1]) {
      segments.push({
        color: f.isInvalid ? 'red' : 'purple',
        width: getSegmentWidth(f.arrivaltime, r[i + 1].departuretime) + '%'
      });
    }
  });

  return (
    <S.Timeline>
      <S.Header>
        <S.Time align={'start'}>
          <span>0:00</span>
          <S.Tick />
        </S.Time>
        <S.Time align={'center'}>
          <span>12:00</span>
          <S.Tick />
        </S.Time>
        <S.Time align={'end'}>
          <span />
          <S.Tick />
        </S.Time>
      </S.Header>
      <S.Utilisation>
        {segments.map((s) => (
          <S.UtilisationSegment key={uuidv4()} color={s.color} width={s.width} />
        ))}
      </S.Utilisation>
    </S.Timeline>
  );
};

export default Timeline;
