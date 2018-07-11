import React, { Component } from 'react';

class Table extends Component {
  state = { 
    head: this.props.head, 
    data: this.props.data,
    parentClass: this.props.parentClass
  }
  render() {
    return (
      <table className={ this.state.parentClass || 'table' }>
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
              { this.state.head.map((heading) =>
                <td key={ this.state.data[key][heading.toLowerCase()] }>
                  { this.state.data[key][heading.toLowerCase()] }
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