import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Crown />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        <Link className='option' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default Header;
