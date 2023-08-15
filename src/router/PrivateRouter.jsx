import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const session = sessionStorage.getItem('token');
  return currentUser || session ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRouter;
