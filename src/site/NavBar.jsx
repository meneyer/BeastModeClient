import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const NavigationBar = () => {
  return (
    <div>
      <AppBar id="AppBar" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">BEAST : MODE</Typography>
          <ButtonGroup variant="text" color="default" aria-label="">
            <Button startIcon={<AccountBoxIcon />} color="inherit">
              Log In
            </Button>
            <Button startIcon={<VpnKeyIcon />} color="inherit">
              Register
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
