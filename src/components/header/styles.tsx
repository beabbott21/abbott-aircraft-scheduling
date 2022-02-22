import styled from '@emotion/styled';

export const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const Date = styled.div`
  font-weight: 600;
`;
export const DateAdjust = styled.button`
  margin: 0 16px;
  cursor: pointer;
`;
