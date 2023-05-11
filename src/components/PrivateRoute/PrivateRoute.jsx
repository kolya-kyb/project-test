
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const  PrivateRoute = ({component:Component, redirectTo='/'}) => {
  const isLogin = useSelector(state =>state.auth.isLogin);
  const token = useSelector(state =>state.auth.token);

const shouldRedirect = !isLogin && !token;


  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component/>
}

export default  PrivateRoute;
