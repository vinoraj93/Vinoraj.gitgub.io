import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import ImportIcon from "@material-ui/icons/VerticalAlignBottom";
import AddEmployeeForm from "./AddEmployeeForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  input: {
    display: "none"
  },
  fab: {
    marginLeft: theme.spacing(2)
  }
}));

export default function EmployeeCustomToolbar() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  return (
    <React.Fragment>
      <input
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Tooltip title={"Import"} component="span">
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fab}
            size="small"
            component="span"
          >
            <ImportIcon />
          </Fab>
        </Tooltip>
      </label>
      <Tooltip title={"Add"}>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          size="small"
          onClick={handleAddOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Add Employee</DialogTitle>
        <Divider />
        <DialogContent>
          <AddEmployeeForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
