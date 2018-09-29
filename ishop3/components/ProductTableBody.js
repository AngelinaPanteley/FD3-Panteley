import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableRow from './ProductTableRow';

export default class ProductTableBody extends Component {
  static propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        color: PropTypes.string,
      })
    ).isRequired,
  }

  state = {
    selectedRow: null,
  }

  onRowClick = (e) => {
    const selected = e.target.closest('tr').getAttribute('data-index');
    this.setState({
      selectedRow: selected,
    });
    this.props.onRowSelect(selected);
  }

  render() {
    const keys = this.props.keys;
    let photoKeyIndex;
    const rows = this.props.rows.map((item, index) => {
      const productValues = Object.keys(item).map(function (key, index) {
        if (key === 'photo') {
          photoKeyIndex = index;
        }
        return item[key];
      });

      const selected = productValues[0] == this.state.selectedRow;

      return <ProductTableRow key={keys[index]} productValues={productValues}
        photoKeyIndex={photoKeyIndex} onRowClick={this.onRowClick}
        onRowDelete={this.props.onRowDelete}
        selected={selected} />;
    });

    return <tbody className='product-table__body'>{rows}</tbody>;
  }
}
