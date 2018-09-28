import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductTableHeader extends Component {
  render() {
    const headerRow = <tr className='product-table__row'>
      {this.props.titles.map(function (title, index) {
        return <td className='product-table__column' key={index}>{title}</td>
      })}
      <td></td>
    </tr>

    return <thead className='product-table__header'>{headerRow}</thead>;
  }
}

ProductTableHeader.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProductTableHeader;