import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { COLOR_THEME } from './../../constants';
import {
  AppBar,
  Toolbar,
  IconButton,
  FormControlLabel,
  Switch,
  Divider,
} from '@material-ui/core';

const NavBar = ({ colorTheme, changeColorTheme }) => {
  const classes = useStyles({ colorTheme });
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleToogleChange = event => {
    const colorTheme = event.target.checked ? COLOR_THEME.DARK : COLOR_THEME.LIGHT;
    setDarkTheme(event.target.checked);
    changeColorTheme(colorTheme);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        className={classes.appBar}
        color={colorTheme === COLOR_THEME.DARK ? 'secondary' : 'primary'}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <i className='material-icons'>menu</i>
          </IconButton>
          <Link to='/' className={classes.link}>
            GitHub Repos
          </Link>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkTheme}
                onChange={handleToogleChange}
                value='darkTheme'
                color='default'
              />
            }
            label='Toggle Theme'
          />
          <Divider className={classes.divider} orientation='vertical' />
          <IconButton edge='start' color='inherit' aria-label='menu' mx={2}>
            <i className='material-icons'>notifications</i>
          </IconButton>
          <IconButton edge='start' color='inherit' aria-label='menu' mx={2}>
            <i className='material-icons'>account_circle</i>
          </IconButton>
          <IconButton edge='start' color='inherit' aria-label='menu' mx={2}>
            <i className='material-icons'>help</i>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  colorTheme: PropTypes.oneOf([COLOR_THEME.DARK, COLOR_THEME.LIGHT]),
  changeColorTheme: PropTypes.func
};

export default NavBar;