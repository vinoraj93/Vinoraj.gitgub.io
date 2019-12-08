import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectTypeCustomToolbar from "./DefectTypeCustomToolbar";
import DefectTypeCustomToolbarSelect from "./DefectTypeCustomToolbarSelect";

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
    name: "TypeId",
    label: "Defect Type Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "TypeName",
    label: "Defect Type Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Description",
    label: "Defect Type Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    TypeId: "DT-001",
    TypeName: "UI",
    Description: "User Interface"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <DefectTypeCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <DefectTypeCustomToolbarSelect />;
  }
};

export default function ManageDefectType() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
