import styled from '@emotion/styled';

export const Timeline = styled.div`
  grid-area: timeline;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

export const Time = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: column;
  width: 24px;
  justify-content: flex-end;
  align-items: ${({ align }) => align || 'center;'};
  :last-of-type {
    margin-right: 1px;
  }
`;

export const Tick = styled.div`
  width: 1px;
  border-bottom: 8px solid #ccc;
`;

export const Utilisation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
  background: grey;
  height: 5vh;
  border: 1px solid #becad6;
  border-radius: 5px;
  overflow: hidden;
`;
export type SegmentProps = {
  color: string;
  width: string;
};

export const UtilisationSegment = styled.div<SegmentProps>`
  width: ${({ width }) => width || '0px'};
  background: ${({ color }) => color || 'grey'};
`;
