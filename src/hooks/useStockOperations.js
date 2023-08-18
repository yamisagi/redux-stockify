import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, getInfoSuccess } from '../features/stockSlice';
import { toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify';
import useAxios from './useAxios';

const useStockOperations = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getInfo = async (type) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/stock/${type}/`);
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
      await axiosWithToken.delete(`/stock/${type}/${id}/`);
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
