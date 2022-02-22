import styled from '@emotion/styled';
import * as S from '../shared/styles';

export const Aircrafts = styled(S.Column)`
  grid-area: aircrafts;
`;

export const Header = S.ColumnHeader;

export const List = S.List;

export const Aircraft = styled.div<{ isSelected: boolean }>`
  height: 88px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  background: ${(isSelected) => (isSelected ? '#ccdef0' : '#fff')};
`;

export const Utilization = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 8px;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
`;
