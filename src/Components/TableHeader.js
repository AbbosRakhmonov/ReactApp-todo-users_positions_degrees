import React from "react";

export default function TableHeader({ obj }) {
  const { headers } = obj;
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} scope="col">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
