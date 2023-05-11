import { useSelector, useDispatch } from "react-redux";

import { logout } from '../../../redux/auth/authOperations';




const NavbarUser = () => {
   const {email} = useSelector(state => state.auth.user);


  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>{email}</span> <button onClick={onLogout}>User name</button>
    </div>
  );
};

export default NavbarUser;
