import { render, screen } from '@testing-library/react';
import Aircrafts from './Aircrafts';

test('renders aircraft utilization', () => {
  const rotation = [
    {
      id: 'AS1001',
      departuretime: 21600,
      arrivaltime: 26100,
      readable_departure: '06:00',
      readable_arrival: '07:15',
      origin: 'LFSB',
      destination: 'LFMN',
      isInvalid: false
    },
    {
      id: 'AS1002',
      departuretime: 27900,
      arrivaltime: 32100,
      readable_departure: '07:45',
      readable_arrival: '08:55',
      origin: 'LFMN',
      destination: 'LFSB',
      isInvalid: false
    }
  ];

  const aircrafts = [
    {
      ident: 'ABCD',
      type: 'FOO',
      economySeats: 100,
      base: 'BAR'
    }
  ];

  render(
    <Aircrafts
      aircrafts={aircrafts}
      selectedAircraft={'ABCD'}
      selectAircraft={() => null}
      rotation={rotation}
    />
  );
  const utilizationElement = screen.getByText(/17%/i);

  expect(utilizationElement).toBeInTheDocument();
});
