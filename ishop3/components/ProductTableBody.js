import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableRow from './ProductTableRow';

export default class ProductTableBody extends Component {
  static propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        color: PropTypes.string,
      })
    ).isRequired,
    keys: PropTypes.arrayOf(
      PropTypes.number
    ).isRequired,
    selectedRowId: PropTypes.number,
    onRowDelete: PropTypes.func.isRequired,
    onRowSelect: PropTypes.func.isRequired,
    onRowEdit: PropTypes.func.isRequired,
  }

  getRows() {
    const keys = this.props.keys;
    let photoKeyIndex;
    const rows = this.props.rows.map((item, index) => {
      const productValues = Object.keys(item).map(function (key, index) {
        if (key === 'photo') {
          photoKeyIndex = index;
        }
        return item[key];
      });

      const selected = productValues[0] == this.props.selectedRowId;

      return <ProductTableRow key={keys[index]} productValues={productValues}
        photoKeyIndex={photoKeyIndex} onRowClick={this.onRowClick}
        onRowDelete={this.props.onRowDelete}
        onRowEdit={this.props.onRowEdit}
        onRowSelect={this.props.onRowSelect}
        selected={selected} />;
    });
    return rows;
  }

  render() {
    const rows = this.getRows();

    return <tbody className='product-table__body'>{rows}</tbody>;
  }
}
