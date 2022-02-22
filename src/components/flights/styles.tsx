import styled from '@emotion/styled';
import * as S from '../shared/styles';

export const Header = S.ColumnHeader;
export const List = styled.div`
  overflow: scroll;
`;
export const ListContainer = styled(S.List)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Flights = styled(S.Column)`
  grid-area: flights;
`;

export const Flight = styled.div<{ isDragging: boolean }>`
  display: grid;
  padding: 4px 8px;
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
  background: ${({ isDragging }) => (isDragging ? '#ccdef0' : '#fff')};
`;

const FlightDetail = styled.span`
  text-align: center;
`;

export const Ident = styled(FlightDetail)`
  grid-area: ident;
  font-size: 16px;
  font-weight: 500;
`;

export const Dep = styled(FlightDetail)`
  padding: 4px;
  grid-area: dep;
`;

export const DepTime = styled(FlightDetail)`
  grid-area: depTime;
`;

export const Arr = styled(FlightDetail)`
  padding: 4px;
  grid-area: arr;
`;

export const ArrTime = styled(FlightDetail)`
  grid-area: arrTime;
`;

export const ButtonContainer = styled.div`
  padding: 8px;
`;
export const MoreFlights = styled.button`
  width: 100%;
  background: #0084ff;
  padding: 24px 0;
  marging: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: #0075e3;
  }
`;
