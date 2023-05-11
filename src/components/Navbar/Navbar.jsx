import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import items from './items';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => {
const isLogin = useSelector(state =>state.auth.isLogin);

  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return (
    <div className={styles.navbarWrapper}>
      <ul className={styles.navbar}>{elements}</ul>
      {isLogin?         <NavbarUser />
        :<NavbarAuth />}
    </div>
  );
};

export default Navbar;
