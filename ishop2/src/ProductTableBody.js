import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductTableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const keys = this.props.keys;
    let photoKeyIndex;
    const rows = this.props.rows.map(function (item, index) {
      const productValues = Object.keys(item).map(function (key, index) {
        if (key === 'photo') {
          photoKeyIndex = index;
        }
        return item[key];
      });

      return <tr className='product-table__row' key={keys[index]} >
        {productValues.map(function (value, valueIndex) {
          const inner = photoKeyIndex === valueIndex ?
            <img className='product-table__img' src={value} /> : value;
          return <td className='product-table__column' key={valueIndex}>{inner}</td>;
        })}
      </tr>
    });

    return <tbody className='product-table__body'>{rows}</tbody>;
  }
}

ProductTableBody.propTypes = {
  products: PropTypes.arrayOf(
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

export default ProductTableBody;