import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectSeverityCustomToolbar from "./DefectSeverityCustomToolbar";
import DefectSeverityCustomToolbarSelect from "./DefectSeverityCustomToolbarSelect";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

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
    name: "Id",
    label: "Id",
    options: {
      filter: true,
      sort: true
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
    name: "Description",
    label: "Description",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Icon",
    label: "Icon",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Color",
    label: "Color",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    Id: "DS-001",
    Name: "High",
    Description: "The defect affects critical functionality or critical data",
    Icon: <TrendingUpIcon />,
    Color: (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="60" height="30" fill="red" />
      </svg>
    )
  },
  {
    Id: "DS-002",
    Name: "Medium",
    Description: "The defect affects major functionality or major data",
    Icon: <TrendingFlatIcon />,
    Color: (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="60" height="30" fill="orange" />
      </svg>
    )
  },
  {
    Id: "DS-003",
    Name: "Low",
    Description: "The defect affects minor functionality or non-critical data",
    Icon: <TrendingDownIcon />,
    Color: (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="60" height="30" fill="yellow" />
      </svg>
    )
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <DefectSeverityCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <DefectSeverityCustomToolbarSelect />;
  }
};

export default function ManageDefectSeverity() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
