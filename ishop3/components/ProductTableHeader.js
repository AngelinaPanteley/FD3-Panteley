import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductTableHeader.css';

export default class ProductTableHeader extends Component {
  static propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const headerRow = <tr className='product-table__row'>
      {this.props.titles.map(function (title, index) {
        if (title === 'price') {
          title += ', $';
        }
        return <td className='product-table__column' key={index}>{title}</td>
      })}
      <td>Control</td>
    </tr>

    return <thead className='product-table__header'>{headerRow}</thead>;
  }
}
