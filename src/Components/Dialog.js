import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Dialog(props) {
  const { positions, degrees } = props;
  const {
    data,
    selectedItem,
    setIsOpenDialog,
    ADD_ITEM,
    UPDATE_ITEM,
    handleClickAddBtn,
  } = props.dialog;
  const { item, title, keyHeaders, headers } = selectedItem;
  const [itemData, setItemData] = useState(item);
  const handleOnChangeSelect = (keyHeader, value) => {
    const prevItemData = [...itemData];
    prevItemData.map((item) => (item[keyHeader] = parseInt(value)));
    setItemData(prevItemData);
  };
  const handleOnChangeInput = (keyHeader, value) => {
    const prevItemData = [...itemData];
    prevItemData.map((item) => (item[keyHeader] = value));
    setItemData(prevItemData);
  };
  const handleCancelButton = () => {
    setIsOpenDialog(false);
  };
  const handleSaveButton = () => {
    if (title.toLowerCase().includes("add")) {
      ADD_ITEM({ ...itemData[0], id: data.length + 1 });
    } else {
      UPDATE_ITEM(...itemData);
    }
    handleClickAddBtn();
  };

  useEffect(() => {
    setItemData(item);
  }, [item]);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{`${title}`}</h3>
      </div>
      <div className="card-body">
        {itemData.map((item) =>
          keyHeaders.map((keyHeader, index) =>
            keyHeader === "positionId" ? (
              <select
                className="form-select mb-2"
                key={index}
                value={item[keyHeader]}
                onChange={(e) =>
                  handleOnChangeSelect(keyHeader, e.target.value)
                }
              >
                {positions.map((position) => (
                  <option key={position.id} value={position.id}>
                    {position.name}
                  </option>
                ))}
              </select>
            ) : keyHeader === "degreeId" ? (
              <select
                className="form-select mb-2"
                key={index}
                value={item[keyHeader]}
                onChange={(e) =>
                  handleOnChangeSelect(keyHeader, e.target.value)
                }
              >
                {degrees.map((degree) => (
                  <option key={degree.id} value={degree.id}>
                    {degree.name}
                  </option>
                ))}
              </select>
            ) : keyHeader !== "id" ? (
              <input
                key={index}
                className="form-control mb-2"
                placeholder={headers[index]}
                value={item[keyHeader]}
                onChange={(e) => handleOnChangeInput(keyHeader, e.target.value)}
              ></input>
            ) : (
              ""
            )
          )
        )}
      </div>
      <div className="card-footer text-end">
        <button className="btn btn-secondary me-2" onClick={handleCancelButton}>
          Cancel
        </button>
        <button className="btn btn-success me-2" onClick={handleSaveButton}>
          Save
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    positions: state.PositionReducer.positions,
    degrees: state.DegreeReducer.degrees,
  };
}

export default connect(mapStateToProps)(Dialog);
