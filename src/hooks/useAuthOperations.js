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
import useAxios from './useAxios';
import { urls } from '../constants/routes';

const useAuthOperations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axiosWithoutToken } = useAxios();

  const { stock, loginPath, loginUrl, registerUrl, logoutUrl } = urls;

  const login = async (userData) => {
    console.log(userData);
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithoutToken.post(loginUrl, userData);
      const { key, user } = data;
      dispatch(
        // We can use this action to set the user data in the store or
        // loginSuccess(data) to set the user data in the store
        loginSuccess({
          user,
          key,
        })
      );
      navigate(stock);
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
      await axiosWithoutToken.post(logoutUrl);
      dispatch(logoutSuccess());
      navigate(loginPath);
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
      const { data } = await axiosWithoutToken.post(
        registerUrl,
        userData
      );
      console.log(data);
      dispatch(registerSuccess(data));
      navigate(stock);
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
