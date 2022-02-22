import axios from 'axios';
import { useState, useEffect } from 'react';
import { Aircraft, ApiResponse, AxiosOptions, AxiosResponse, Flight } from './types';

const AIRCRAFTS_URL = 'https://infinite-dawn-93085.herokuapp.com/aircrafts';
const FLIGHTS_URL = ' https://infinite-dawn-93085.herokuapp.com/flights';

const useFetchData = <T>(
  baseUrl: string,
  offset = 0,
  query = '',
  limit?: number
): AxiosResponse<T> => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `${baseUrl}${query && `/${query}`}`;
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
        params: { limit: 10 }
      })
      .then((res: ApiResponse) => {
        setData(res.data.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [baseUrl, offset, query]);
  return { data, error, loading };
};

export const useAircrafts = (offset?: number, query?: string): AxiosResponse<Aircraft> =>
  useFetchData<Aircraft>(AIRCRAFTS_URL, offset, query);

export const useFlights = (offset?: number, query?: string): AxiosResponse<Flight> =>
  useFetchData<Flight>(FLIGHTS_URL, offset, query, 10);
