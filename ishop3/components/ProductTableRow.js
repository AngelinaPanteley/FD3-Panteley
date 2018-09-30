import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductTableRow.css';

export default class ProductTableRow extends Component {
  static propTypes = {
    productValues: PropTypes.array.isRequired,
    photoKeyIndex: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onRowDelete: PropTypes.func.isRequired,
    onRowSelect: PropTypes.func.isRequired,
    onRowEdit: PropTypes.func.isRequired,
  }

  onRowDelete = (e) => {
    e.stopPropagation();
    this.props.onRowDelete(this.props.productValues[0]);
  }

  onRowEdit = (e) => {
    e.stopPropagation();
    this.props.onRowEdit(this.props.productValues[0]);
  }

  onRowClick = (e) => {
    const selected = this.props.productValues[0];
    this.props.onRowSelect(selected);
  }

  render() {
    const photoKeyIndex = this.props.photoKeyIndex;
    const rowClass = this.props.selected ? 'product-table__row selected' : 'product-table__row';
    return <tr className={rowClass} onClick={this.onRowClick}>
      {this.props.productValues.map(function (value, valueIndex) {
        const inner = photoKeyIndex === valueIndex ?
          <img className='product-table__img' src={value} alt="product" /> : value;
        return <td className='product-table__column' key={valueIndex}>{inner}</td>;
      })}
      <td>
        <button onClick={this.onRowEdit}>Edit</button>
        <button onClick={this.onRowDelete}>Delete</button>
      </td>
    </tr>
  }
}
