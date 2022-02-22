import { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

const Header = ({ date, setDate }: { date: Date; setDate: Dispatch<SetStateAction<Date>> }) => {
  const dateString = date.toDateString();

  const adjustDate = (adjustment: 'inc' | 'dec') => {
    const direction = { inc: 1, dec: -1 };

    const newDate = new Date();
    newDate.setDate(date.getDate() + direction[adjustment]);
    setDate(newDate);
  };

  return (
    <S.Header>
      <S.DateAdjust onClick={() => adjustDate('dec')}>{'<'}</S.DateAdjust>
      <S.Date>{dateString}</S.Date>
      <S.DateAdjust onClick={() => adjustDate('inc')}>{'>'}</S.DateAdjust>
    </S.Header>
  );
};

export default Header;
