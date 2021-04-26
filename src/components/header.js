import React from 'react';

import headerLogo from '../assets/static/logo.svg';
import '../assets/styles/header.css';

const Header = () => (
  <div className='header'>
    <img src={headerLogo} alt='superfuds' className='header-logo' />
  </div>
);

export default Header;
