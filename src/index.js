import React, { Component } from 'react';
import './table.scss';

class Table extends Component {
  state = { 
    head: this.props.head || [], 
    data: this.props.data || []
  }
  render() {
    return (
      <table className={ (!this.props.disableStyles ? "table " : "") + this.props.parentClass }>
        <thead>

          {/* Loop around prop.head items and create table head rows */}
          <tr>
            { this.state.head.map((heading) =>
                <th key={ heading.toString() }>{ heading }</th>
              )
            } 
          </tr>
        </thead>
        <tbody>

        {/* Loop around prop.data items */}
        { Object.keys(this.state.data).map((key) => {
          return (
            <tr key={ key }>

              {/* If data item matches prop.head item return item */}
              { this.state.head.map((heading, index) =>
                <td key={ this.state.data[key][heading.toLowerCase()] || index }>
                  { this.state.data[key][heading.toLowerCase()] || this.props.placeholder }
                </td>
                )
              }
            </tr>
          )
        } )}
        </tbody>
      </table>
    );
  }
}

export default Table;