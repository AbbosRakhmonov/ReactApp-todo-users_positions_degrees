import React from "react";

export default function TableBody({ obj }) {
  const {
    data,
    actions,
    keyHeaders,
    positions,
    degrees,
    DELETE_ITEM,
    setSelectedItem,
    setIsOpenDialog,
    pageTitle,
    headers,
  } = obj;

  const handleEditButton = (item) => {
    const intialItem = {
      item: [{ ...item }],
      title: `Edit ${pageTitle}`,
      keyHeaders,
      headers,
    };
    setIsOpenDialog(true);
    setSelectedItem(intialItem);
  };
  return (
    <tbody>
      {data.map((data) => (
        <tr key={data.id}>
          {keyHeaders.map((key, idx) => (
            <td key={idx}>
              {key === "positionId" &&
              positions.filter((position) => position.id === data[key]).length >
                0
                ? positions.filter((position) => position.id === data[key])[0]
                    .name
                : key === "degreeId" &&
                  degrees.filter((degree) => degree.id === data[key]).length > 0
                ? degrees.filter((degree) => degree.id === data[key])[0].name
                : data[key]}
            </td>
          ))}
          <td>
            {actions.map((action) => (
              <button
                key={action.id}
                className={`btn btn-${action.color} me-2`}
                onClick={() =>
                  action.name === "Delete"
                    ? DELETE_ITEM(data.id)
                    : handleEditButton(data)
                }
              >
                {action.name}
              </button>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
