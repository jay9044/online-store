import React, { Component } from "react";
import _ from "lodash"; //lodash has a method called get

//interface;
// columns : array
// sort colummn: object
//onsort: function

class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  renderCell(item, column) {
    if (column.content) return column.content(item);

    return _.get(item, column.path); // this get method does dot notation
  }

  createKey(item, column) {
    return item._id + (column.path || column.key);
  }

  render() {
    // const { paginateMovies, onHandleLike, onDelete } = this.props;
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              //   <td>{item[column.path]}</td> // this doesent get genre.name due to the dot notation, so we use lodash above
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
