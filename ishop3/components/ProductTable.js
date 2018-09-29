import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableHeader from './ProductTableHeader';
import ProductTableBody from './ProductTableBody';
import ProductCard from './ProductCard';
import './ProductTable.css';

export default class ProductTable extends Component {
  static propTypes = {
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

  state = {
    products: this.props.products,
    selectedProduct: null,
  }

  onRowDelete = (rowIndex) => {
    this.setState((prevState) => {
      return {
        products: prevState.products.filter((item) => item.id !== rowIndex),
      }
    });
  }

  onRowSelect = (selectedRowId) => {
    const selectedProduct = this.state.products.find((item) => item.id == selectedRowId)
    this.setState({ selectedProduct });
  }

  render() {
    const products = this.state.products;

    const ids = products.map(function (item) {
      return item.id;
    });

    return <div>
      {
        !!products.length &&
        <table className='product-table' >
          <ProductTableHeader titles={Object.keys(products[0])} />
          <ProductTableBody rows={products} keys={ids} onRowDelete={this.onRowDelete}
            onRowSelect={this.onRowSelect} />
        </table>
      }
      {
        !!this.state.selectedProduct &&
        <ProductCard product={this.state.selectedProduct} />
      }
      {
        !products.length &&
        <p>There is no products</p>
      }
    </div>;
  }
}
