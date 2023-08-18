import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const useAxios = () => {
    // TODO: Make sure to use the token from the redux store not from the sessionStorage
  //! It is for testing purposes only gonna change it after Redux Persist is implemented
  
  //   const { token } = useSelector((state) => state.auth);
  const token = sessionStorage.getItem('token');
  const axiosWithToken = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  const axiosWithoutToken = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });
  return { axiosWithToken, axiosWithoutToken };
};

export default useAxios;
