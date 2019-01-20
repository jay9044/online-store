import React, { Component } from "react";

//interface;
// columns : array
// sort colummn: object
//onsort: function

class TableHeader extends Component {
  constructor(props) {
    super(props);
  }
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn }; //clone the object
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  rendersortIcon(column) {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null; // so if the column isnt clicked dont show arrow, (howver title while show as 'clicked' since  i have set to being aplbaetical ordred)
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />; // if it is clicked

    return <i className="fa fa-sort-desc" />; // if it is now in descendind order, which it would be one clicked from asc order
    // cant do ternary since they are all different aspects being changed
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.rendersortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
