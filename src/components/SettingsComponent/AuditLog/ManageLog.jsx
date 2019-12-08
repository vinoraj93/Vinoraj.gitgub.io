import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import LogCustomToolbarSelect from "./LogCustomToolbarSelect";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  container: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const columns = [
  {
    name: "Date",
    label: "Date",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "EmployeeId",
    label: "Employee Id",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Name",
    label: "Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "WorkCategory",
    label: "Work Category",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    Date: "27/10/2019",
    EmployeeId: "E-100",
    Name: "Bals",
    WorkCategory: "UI"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbarSelect: () => {
    return <LogCustomToolbarSelect />;
  }
};

export default function ManageLog() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
