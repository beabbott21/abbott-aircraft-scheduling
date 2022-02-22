import styled from '@emotion/styled';

export const SchedulerPage = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 16px;
  grid-template-areas:
    'header header header header'
    'aircrafts rotations rotations flights'
    'aircrafts rotations rotations flights'
    'aircrafts timeline timeline flights';
`;
