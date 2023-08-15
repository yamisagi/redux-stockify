import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const session = sessionStorage.getItem('email');
  // TODO: uncomment this when auth is ready
  // return currentUser || session ? <Outlet /> : <Navigate to='/' />;
  return <Outlet />;
};

export default PrivateRouter;
