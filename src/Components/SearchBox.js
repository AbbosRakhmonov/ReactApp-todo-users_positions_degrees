import React, { useState } from "react";

export default function SearchBox({ obj }) {
  const { data, FILTER_ITEM } = obj;
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    FILTER_ITEM(e.target.value);
  };
  return (
    <>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        value={search}
        onChange={handleChange}
      />
      <datalist id="datalistOptions">
        {data.map((data) => (
          <option key={data.id} value={data.name} />
        ))}
      </datalist>
    </>
  );
}
