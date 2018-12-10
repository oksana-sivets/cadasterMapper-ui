import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import s from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <AppBar className={s.root} classes={{ colorPrimary: s.bgrColor }}>
        <div className={s.container}>
          <Typography variant="h6" color="inherit" className={s.bannerTitle}>
            Кадастрова карта України
          </Typography>
        </div>
      </AppBar>
    );
  }
}

export default withStyles(s)(Header);
