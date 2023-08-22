import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);

  //! For development purposes
  //! Remove this line when you are done
  
  const session = sessionStorage.getItem('token');
  return currentUser || session ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRouter;
