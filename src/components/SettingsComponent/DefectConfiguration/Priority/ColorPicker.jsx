import React from "react";
import { ChromePicker } from "react-color";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  button: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: "250px"
  }
}));

export default function ColorPicker() {
  const classes = useStyles();
  const [displayCP, setDisplayCP] = React.useState(false);

  const handleClick = () => {
    setDisplayCP(!displayCP);
  };

  const handleClose = () => {
    setDisplayCP(false);
  };

  const popover = {
    position: "absolute",
    zIndex: "2"
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px"
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleClick}
      >
        Pick Color
      </Button>
      {displayCP ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker />
        </div>
      ) : null}
    </div>
  );
}
