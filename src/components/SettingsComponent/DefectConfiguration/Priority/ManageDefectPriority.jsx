import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectPriorityCustomToolbar from "./DefectPriorityCustomToolbar";
import DefectPriorityCustomToolbarSelect from "./DefectPriorityCustomToolbarSelect";
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
    name: "PriorityId",
    label: "Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "PriorityName",
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
    PriorityId: "DP-001",
    PriorityName: "High",
    Description: "Must be fixed immediately / in the next build",
    Icon: <TrendingUpIcon />,
    Color: (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="60" height="30" fill="red" />
      </svg>
    )
  },
  {
    PriorityId: "DP-002",
    PriorityName: "Medium",
    Description:
      "Must be fixed in any of the upcoming builds but should be included in the release",
    Icon: <TrendingFlatIcon />,
    Color: (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="60" height="30" fill="orange" />
      </svg>
    )
  },
  {
    PriorityId: "DP-003",
    PriorityName: "Low",
    Description: "May be fixed after the release / in the next release",
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
    return <DefectPriorityCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <DefectPriorityCustomToolbarSelect />;
  }
};

export default function ManageDefectPriority() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
