import React, { useState } from "react";
import { connect } from "react-redux";
import TableHeader from "../Components/TableHeader";
import TableBody from "../Components/TableBody";
import {
  DELETE_USER,
  UPDATE_USER,
  FILTER_USER,
  ADD_USER,
} from "../Components/Actions/UserActions";
import SearchBox from "../Components/SearchBox";
import Dialog from "../Components/Dialog";

export function Users(props) {
  const { data, keyHeaders, headers, ADD_ITEM, UPDATE_ITEM } = props;
  const initialItem = {
    item: [
      {
        name: "",
        lastName: "",
        phone: "",
        positionId: 1,
        degreeId: 1,
      },
    ],
    title: "Add User",
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
              <h3 className="text-center">Users</h3>
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
                    pageTitle: "User",
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
    data: state.UserReducer.filtered,
    headers: state.UserReducer.headers,
    keyHeaders: state.UserReducer.keyHeaders,
    actions: state.UserReducer.actions,
    positions: state.PositionReducer.filtered,
    degrees: state.DegreeReducer.filtered,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    DELETE_ITEM: (id) => dispatch(DELETE_USER(id)),
    UPDATE_ITEM: (item) => dispatch(UPDATE_USER(item)),
    FILTER_ITEM: (item) => dispatch(FILTER_USER(item)),
    ADD_ITEM: (item) => dispatch(ADD_USER(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
