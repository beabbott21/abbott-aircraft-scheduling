import axios from 'axios';
import { useState, useEffect } from 'react';
import { Aircraft, ApiResponse, AxiosOptions, AxiosResponse, Flight } from './types';

const AIRCRAFTS_URL = 'https://infinite-dawn-93085.herokuapp.com/aircrafts';
const FLIGHTS_URL = ' https://infinite-dawn-93085.herokuapp.com/flights';

const useFetchData = <T>(url: string, limit?: number): AxiosResponse<T> => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  //Not currently used
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {} as AxiosOptions;
  if (limit) {
    options.limit = limit;
  }
  if (offset) {
    options.offset = offset;
  }
  const fetchData = () => {
    axios
      .get(url, {
        params: { limit: 10, offset }
      })
      .then((res: ApiResponse) => {
        setData(res.data.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const loadMore = () => {
    setOffset(offset + 10);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  return { data, error, loading, loadMore };
};

export const useAircrafts = (): AxiosResponse<Aircraft> => useFetchData<Aircraft>(AIRCRAFTS_URL);

export const useFlights = (): AxiosResponse<Flight> => useFetchData<Flight>(FLIGHTS_URL, 10);
