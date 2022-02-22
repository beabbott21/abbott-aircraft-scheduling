import styled from '@emotion/styled';

export const SchedulerPage = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 16px;
  grid-template-areas:
    'header header header'
    'aircrafts rotations flights'
    'aircrafts rotations flights'
    'aircrafts timeline flights';
`;
