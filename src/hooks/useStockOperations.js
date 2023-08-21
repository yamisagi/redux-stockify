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
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1, 4);
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/stock/${type}/${id}/`);
      getInfo(type);
      toastSuccessNotify(`${capitalized} Deleted Successfully`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${capitalized} Deletion Failed`);
      console.log(error);
    }
  };

  const postStockInfo = async (type, data) => {
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1, 4);
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/stock/${type}/`, data);
      getInfo(type);
      toastSuccessNotify(`${capitalized} Added Successfully`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${capitalized} Addition Failed`);
      console.log(error);
    }
  };

  const updateStockInfo = async (type, id, data) => {
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1, 4);
    dispatch(fetchStart());
    try {
      await axiosWithToken.patch(`/stock/${type}/${id}/`, data);
      getInfo(type);
      toastSuccessNotify(`${capitalized} Updated Successfully`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${capitalized} Updation Failed`);
      console.log(error);
    }
  };

  return { getInfo, deleteStockInfo, postStockInfo, updateStockInfo };
};

export default useStockOperations;
