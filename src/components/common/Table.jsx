import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <React.Fragment>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={data}
          columns={columns}
          // onHandleLike={onHandleLike}
          // onDelete={onDelete}
        />
      </table>
    </React.Fragment>
  );
};

export default Table;
