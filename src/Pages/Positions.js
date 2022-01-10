import React, { useState } from "react";
import { connect } from "react-redux";
import TableHeader from "../Components/TableHeader";
import TableBody from "../Components/TableBody";
import {
  DELETE_POSITION,
  UPDATE_POSITION,
  FILTER_POSITION,
  ADD_POSITION,
} from "../Components/Actions/PositionActions";
import SearchBox from "../Components/SearchBox";
import Dialog from "../Components/Dialog";

export function Positions(props) {
  const { data, keyHeaders, headers, ADD_ITEM, UPDATE_ITEM } = props;
  const initialItem = {
    item: [
      {
        name: "",
        salary: "",
      },
    ],
    title: "Add Position",
    keyHeaders,
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
              <h3 className="text-center">Positions</h3>
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
                    pageTitle: "Position",
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

function mapSateToProps(state) {
  return {
    data: state.PositionReducer.filtered,
    headers: state.PositionReducer.headers,
    keyHeaders: state.PositionReducer.keyHeaders,
    actions: state.PositionReducer.actions,
    positions: state.PositionReducer.positions,
    degrees: state.DegreeReducer.degrees,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    DELETE_ITEM: (id) => dispatch(DELETE_POSITION(id)),
    UPDATE_ITEM: (item) => dispatch(UPDATE_POSITION(item)),
    FILTER_ITEM: (item) => dispatch(FILTER_POSITION(item)),
    ADD_ITEM: (item) => dispatch(ADD_POSITION(item)),
  };
}

export default connect(mapSateToProps, mapDispatchToProps)(Positions);
