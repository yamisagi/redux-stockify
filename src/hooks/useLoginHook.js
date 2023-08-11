import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/authSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(
        `${baseUrl}/account/auth/login/`,
        userData
      );
      console.log(data);
      dispatch(
        loginSuccess({
          ...data,
        })
      );
      navigate('/stock');
      toastSuccessNotify('Login Success');
    } catch (error) {
      toastErrorNotify('Login Failed');
      console.log(error);
    }
  };

  return { login };
};

export default useLogin;
