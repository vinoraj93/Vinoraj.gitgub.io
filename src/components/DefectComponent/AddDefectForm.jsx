import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  descField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "363px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px",
    textAlign: "left"
  },
  buttonUpload: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "230px"
  },
  input: {
    display: "none"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  }
}));

export default function AddDefectForm() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Container className={classes.container}>
        <Paper
          className={classes.paper}
          components={{
            Container: props => <Paper {...props} elevation={4} />
          }}
        >
          <form className={classes.container} autoComplete="off">
            <Grid container direction="column" alignItems="center">
              <div>
                <TextField
                  required
                  id="project-name"
                  label="Defect Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Project
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="CMS">CMS</MenuItem>
                    <MenuItem value="LMS">LMS</MenuItem>
                    <MenuItem value="SIS">SIS</MenuItem>
                  </Select>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Module
                  </InputLabel>
                  <Select value={value} onChange={handleChange}>
                    <MenuItem value="Left Drawer">Left Drawer</MenuItem>
                    <MenuItem value="Header">Header</MenuItem>
                    <MenuItem value="Footer">Footer</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Sub Module
                  </InputLabel>
                  <Select value={value} onChange={handleChange}>
                    <MenuItem value="Menu Item">Menu Item</MenuItem>
                    <MenuItem value="Search Bar">Search Bar</MenuItem>
                  </Select>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Type
                  </InputLabel>
                  <Select value={value} onChange={handleChange}>
                    <MenuItem value="UI">UI</MenuItem>
                    <MenuItem value="Function">Function</MenuItem>
                  </Select>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Severity
                  </InputLabel>
                  <Select value={value} onChange={handleChange}>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Priority
                  </InputLabel>
                  <Select value={value} onChange={handleChange}>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </Select>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Assigned To
                  </InputLabel>
                  <Select value={value} onChange={handleChange}>
                    <MenuItem value="U-2541">U-2541</MenuItem>
                    <MenuItem value="U-2548">U-2548</MenuItem>
                    <MenuItem value="U-2556">U-2556</MenuItem>
                  </Select>
                </FormControl>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.buttonUpload}
                  >
                    Upload Screenshot
                  </Button>
                </label>
              </div>
              <div>
                <TextField
                  required
                  id="project-desc"
                  label="Description"
                  multiline
                  rows="2"
                  className={classes.descField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="project-desc"
                  label="Steps to Re-create"
                  multiline
                  rows="2"
                  className={classes.descField}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                to={"/manage-defect"}
              >
                Cancel
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                component={Link}
                to={"/manage-defect"}
              >
                Add
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
