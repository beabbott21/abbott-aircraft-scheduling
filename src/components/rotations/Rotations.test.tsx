import { render, screen } from '@testing-library/react';
import { DragDropContext, Droppable, DroppableProvided } from 'react-beautiful-dnd';
import Rotations from './Rotations';

test('renders warning if no aircraft', () => {
  render(
    <DragDropContext onDragEnd={() => null}>
      <Droppable droppableId="rotations">
        {(provided: DroppableProvided) => (
          <Rotations dRef={provided.innerRef} aircraft={''} rotation={[]}>
            {provided.placeholder}
          </Rotations>
        )}
      </Droppable>
    </DragDropContext>
  );
  const messageElement = screen.getByText(/Please Select an Aircraft/i);
  expect(messageElement).toBeInTheDocument();
});

test('renders rotation flight', () => {
  const rotation = [
    {
      id: 'AS100',
      origin: 'ABC',
      destination: 'DEF',
      departuretime: 600,
      arrivaltime: 800,
      readable_departure: '6:00',
      readable_arrival: '8:00',
      isInvalid: false
    }
  ];

  render(
    <DragDropContext onDragEnd={() => null}>
      <Droppable droppableId="rotations">
        {(provided: DroppableProvided) => (
          <Rotations dRef={provided.innerRef} aircraft={'ABCD'} rotation={rotation}>
            {provided.placeholder}
          </Rotations>
        )}
      </Droppable>
    </DragDropContext>
  );
  const headerElement = screen.getByText(/Rotation ABCD/i);
  const rotationElement = screen.getByText(/Flight: AS100/i);
  expect(headerElement).toBeInTheDocument();
  expect(rotationElement).toBeInTheDocument();
});
