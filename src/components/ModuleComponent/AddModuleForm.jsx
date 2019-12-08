import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

export default function AddModuleForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container justify="space-between">
          <TextField
            required
            id="project-name"
            label="Module Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="defect-severity">Project</InputLabel>
            <Select value={value} onChange={handleChange}>
              <MenuItem value="CMS">CMS</MenuItem>
              <MenuItem value="LMS">LMS</MenuItem>
              <MenuItem value="SIS">SIS</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </form>
    </div>
  );
}
