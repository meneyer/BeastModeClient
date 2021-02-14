import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const NavigationBar = () => {
  return (
    <div>
      <AppBar id="AppBar" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
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
