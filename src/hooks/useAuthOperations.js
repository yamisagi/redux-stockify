import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify';
import { useDispatch } from 'react-redux';
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from '../features/authSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

const useAuthOperations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    console.log(userData);
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${baseUrl}/account/auth/login/`,
        userData
      );
      const { key, user } = data;
      console.log(data);
      dispatch(loginSuccess({ key, user }));
      navigate('/stock');
      toastSuccessNotify('Login Success');
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify('Login Failed');
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${baseUrl}/account/auth/logout/`);

      dispatch(logoutSuccess());
      navigate('/');
      toastSuccessNotify('Logout Success');
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify('Logout Failed');
      console.log(error);
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${baseUrl}/account/register/`,
        userData
      );
      console.log(data);
      dispatch(registerSuccess(data));
      navigate('/stock');
      toastSuccessNotify('Register Success');
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify('Register Failed');
      console.log(error);
    }
  };

  return { login, logout, register };
};

export default useAuthOperations;