import React, { useState } from "react";
import { connect } from "react-redux";
import TableHeader from "../Components/TableHeader";
import TableBody from "../Components/TableBody";
import {
  DELETE_DEGREE,
  UPDATE_DEGREE,
  FILTER_DEGREE,
  ADD_DEGREE,
} from "../Components/Actions/DegreeActions";
import SearchBox from "../Components/SearchBox";
import Dialog from "../Components/Dialog";

export function Degrees(props) {
  const { data, keyHeaders, headers, ADD_ITEM, UPDATE_ITEM } = props;
  const initialItem = {
    item: [
      {
        name: "",
        bonus: "",
      },
    ],
    title: "Add Degree",
    keyHeaders: keyHeaders,
    headers,
  };
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialItem);
  const handleClickAddBtn = () => {
    setIsOpenDialog(true);
    setSelectedItem(initialItem);
  };
  const dialog = {
    data,
    selectedItem,
    setIsOpenDialog,
    ADD_ITEM,
    UPDATE_ITEM,
    handleClickAddBtn,
  };
  return (
    <div className="col-md-12">
      <div className="row">
        <div className={`${isOpenDialog ? "col-md-8" : "col-md-12"}`}>
          <div className="row">
            <div className="col-md-4">
              <SearchBox obj={props} />
            </div>
            <div className="col-md-6">
              <h3 className="text-center">Degrees</h3>
            </div>
            <div className="col-md-2 text-end">
              <button className="btn btn-primary" onClick={handleClickAddBtn}>
                Add
              </button>
            </div>
            <div className="col-md-12 mt-3">
              <table className="table table-striped text-center">
                <TableHeader obj={props} />
                <TableBody
                  obj={{
                    ...props,
                    setSelectedItem,
                    setIsOpenDialog,
                    pageTitle: "Degree",
                  }}
                />
              </table>
            </div>
          </div>
        </div>
        <div className={`${isOpenDialog ? "col-md-4" : "d-none"}`}>
          <Dialog dialog={dialog} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.DegreeReducer.filtered,
    headers: state.DegreeReducer.headers,
    keyHeaders: state.DegreeReducer.keyHeaders,
    actions: state.DegreeReducer.actions,
    positions: state.PositionReducer.positions,
    degrees: state.DegreeReducer.degrees,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    DELETE_ITEM: (id) => dispatch(DELETE_DEGREE(id)),
    UPDATE_ITEM: (item) => dispatch(UPDATE_DEGREE(item)),
    FILTER_ITEM: (item) => dispatch(FILTER_DEGREE(item)),
    ADD_ITEM: (item) => dispatch(ADD_DEGREE(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Degrees);
