import styled from '@emotion/styled';
import * as S from '../shared/styles';

export const Header = S.ColumnHeader;
export const List = styled(S.List)`
  overflow: scroll;
  height: 57vh;
`;
export const Rotations = styled.div`
  grid-area: rotations;
  height: 60vh;
  width: 100%;
`;

export const Rotation = styled.div`
  display: grid;
  padding: 0 8px;
  border-bottom: 1px solid #ccc;
  grid-template-areas:
    'ident ident ident . . .'
    'dep dep arrow arrow arr arr'
    'depTime depTime arrow arrow arrTime arrTime';
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

const RotationDetail = styled.span`
  padding: 4px;
  text-align: center;
`;

export const Ident = styled(RotationDetail)`
  grid-area: ident;
  font-size: 16px;
  text-align: left;
`;

export const Dep = styled(RotationDetail)`
  grid-area: dep;
`;

export const DepTime = styled(RotationDetail)`
  grid-area: depTime;
`;

export const Arrow = styled(RotationDetail)`
  grid-area: arrow;
`;

export const Arr = styled(RotationDetail)`
  grid-area: arr;
`;

export const ArrTime = styled(RotationDetail)`
  grid-area: arrTime;
`;