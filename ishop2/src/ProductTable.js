import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableHeader from './ProductTableHeader';
import ProductTableBody from './ProductTableBody';

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;

    const ids = products.map(function (item) {
      return item.id;
    });

    return <table className='product-table' >,
      <ProductTableHeader titles={Object.keys(products[0])} />
      <ProductTableBody rows={products} keys={ids} />
    </table>;
  }
}

ProductTable.propTypes = {
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

export default ProductTable;