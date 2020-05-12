import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
  const signOut = () => auth.signOut();
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Crown/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div className='option' onClick={signOut}>
              SIGN OUT
            </div>
            :
            <Link className='option' to='/sign-in'>
              SIGN IN
            </Link>
        }
      </div>
    </div>
  );
};

export default Header;
