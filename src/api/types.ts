export type ApiResponse = {
  data: {
    data: any;
  };
};

export type AxiosOptions = {
  limit?: number;
  offset?: number;
};

export type AxiosResponse<T> = {
  data: T[];
  error: any;
  loading: boolean;
};

export type Aircraft = {
  ident: string;
  type: string;
  economySeats: number;
  base: string;
};

export type Flight = {
  id: string;
  origin: string;
  destination: string;
  departuretime: number;
  arrivaltime: number;
  readable_departure: string;
  readable_arrival: string;
  isInvalid: boolean;
};

export type Location = {
  droppableId: string;
  index: number;
};
export type DragResult = {
  destination: Location;
  draggableId: string;
  reason: 'DROP' | 'CANCEL';
  source: Location;
};
