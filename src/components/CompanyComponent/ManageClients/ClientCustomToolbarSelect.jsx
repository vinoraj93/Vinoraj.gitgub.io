import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import ViewIcon from "@material-ui/icons/AspectRatio";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  fab: {
    marginTop: "4px",
    marginBottom: "4px",
    marginRight: theme.spacing(2)
  }
}));

export default function CompanyCustomToolbarSelect() {
  const classes = useStyles();
  return (
    <div>
      <Tooltip title={"View"}>
        <Fab
          color="secondary"
          aria-label="view"
          className={classes.fab}
          size="small"
        >
          <ViewIcon />
        </Fab>
      </Tooltip>

      <Tooltip title={"Edit"}>
        <Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          size="small"
        >
          <EditIcon className={classes.icon} />
        </Fab>
      </Tooltip>

      <Tooltip title={"Delete"}>
        <Fab
          color="default"
          aria-label="delete"
          className={classes.fab}
          size="small"
        >
          <DeleteIcon className={classes.icon} />
        </Fab>
      </Tooltip>
    </div>
  );
}
