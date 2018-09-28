import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductTableRow extends Component {
  constructor(props) {
    super(props);

    this.onRowDelete=this.onRowDelete.bind(this);
  }

  onRowDelete(e) {
    this.props.onRowDelete(e, this.props.productValues[0]);
  }

  render() {
    const photoKeyIndex = this.props.photoKeyIndex;
    const rowClass = this.props.selected? 'product-table__row selected' : 'product-table__row';
    return <tr className={rowClass} onClick={this.props.onRowClick} data-index={this.props.productValues[0]}>
      {this.props.productValues.map(function (value, valueIndex) {
        const inner = photoKeyIndex === valueIndex ?
          <img className='product-table__img' src={value} alt="product"/> : value;
        return <td className='product-table__column' key={valueIndex}>{inner}</td>;
      })}
      <td>
        <button onClick={this.onRowDelete}>Delete</button>
      </td>
    </tr>
  }
}

ProductTableRow.propTypes = {
  productValues: PropTypes.array.isRequired,
}

export default ProductTableRow;