import React from 'react';
import classes from './styles.module.css';
import { ReactComponent as Logo } from '../../assets/hacker-news.svg';

const Header = () => (
  <header>
    <div className={classes.headerContainer}>
      <div className={classes.headerLogoContainer}>
        <Logo className={classes.headerLogo} />
      </div>
    </div>
  </header>
);

export default Header;
