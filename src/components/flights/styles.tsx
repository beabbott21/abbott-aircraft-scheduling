import styled from '@emotion/styled';
import * as S from '../shared/styles';

export const Header = S.ColumnHeader;
export const List = styled(S.List)`
  overflow: scroll;
`;

export const Flights = styled(S.Column)`
  grid-area: flights;
`;

export const Flight = styled.div<{ isDragging: boolean }>`
  display: grid;
  padding: 0 8px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  grid-template-areas:
    'ident ident ident'
    'dep . arr'
    'depTime . arrTime';
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  background: ${(isDragging) => (isDragging ? '#fff' : '#ccdef0')};
`;

const FlightDetail = styled.span`
  padding: 4px;
  text-align: center;
`;

export const Ident = styled(FlightDetail)`
  grid-area: ident;
  font-size: 16px;
`;

export const Dep = styled(FlightDetail)`
  grid-area: dep;
`;

export const DepTime = styled(FlightDetail)`
  grid-area: depTime;
`;

export const Arr = styled(FlightDetail)`
  grid-area: arr;
`;

export const ArrTime = styled(FlightDetail)`
  grid-area: arrTime;
`;
