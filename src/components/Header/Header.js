import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from "./styles";
import Auth from "../Auth/Auth";
import { auth} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar> 
          <Typography variant="h6" className={classes.title}>
            PJS
          </Typography>
          <img src={user?.photoURL} alt='' className={classes.userImg}/>
          <Auth/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
