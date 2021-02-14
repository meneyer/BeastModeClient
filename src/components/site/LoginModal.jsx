import React from "react";
import { Button, Modal } from "@material-ui/core";

// The styling for the modal
const LoginModal = (theme) => ({
  modalStyle1: {
    position: "absolute",
    top: "10%",
    left: "10%",
    overflow: "scroll",
    height: "100%",
    display: "block",
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    overflow: "scroll",
  };
}
// The actual modal
<Modal open={this.state.open4} className={this.props.classes.modalStyle1}>
  <div>
    <Button
      size="small"
      color="primary"
      variant="contained"
      onClick={this.closeOrder}
    >
      Close
    </Button>
    {this.getPics()}
  </div>
</Modal>;

export default LoginModal;
