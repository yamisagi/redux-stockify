import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, getInfoSuccess } from '../features/stockSlice';
import { toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify';

const useStockOperations = () => {
  // TODO: Make sure to use the token from the redux store not from the sessionStorage
  //! It is for testing purposes only gonna change it after Redux Persist is implemented
  // const { token } = useSelector((state) => state.auth);
  const token = sessionStorage.getItem('token');
  const dispatch = useDispatch();
  const getInfo = async (type) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/${type}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
            // This is the Standard Authorization header for JWT.
            // The token is the one we get when we login the user.
          },
        }
      );
      console.log(data);
      dispatch(getInfoSuccess({ data, type }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteStockInfo = async (type, id) => {
    dispatch(fetchStart());
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/stock/${type}/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
            // This is the Standard Authorization header for JWT.
            // The token is the one we get when we login the user.
          },
        }
      );
      getInfo(type);
      toastSuccessNotify(`${type.capitalize()} Deleted Successfully`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${type.capitalize()} Deletion Failed`);
      console.log(error);
    }
  };

  return { getInfo, deleteStockInfo };
};
export default useStockOperations;
