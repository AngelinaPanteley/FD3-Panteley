import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableHeader from './ProductTableHeader';
import ProductTableBody from './ProductTableBody';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import './ProductTable.css';

export default class ProductTable extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    products: this.props.products,
    selectedProduct: null,
    editProduct: null,
  }

  onRowDelete = (rowIndex) => {
    this.setState((prevState) => {
      return {
        products: prevState.products.filter((item) => item.id !== rowIndex),
        selectedProduct: null,
        editProduct: null,
        addingNewProduct: false,
      }
    });
  }

  onRowEdit = (productId) => {
    const editProduct = this.findProduct(productId);
    this.setState({
      editProduct,
      selectedProduct: null,
      addingNewProduct: false,
    });
  }

  onRowSelect = (selectedRowId) => {
    const selectedProduct = this.findProduct(selectedRowId);
    this.setState({
      selectedProduct,
      editProduct: null,
      addingNewProduct: false,
    });
  }

  findProduct(productId) {
    return this.state.products.find((item) => item.id == productId);
  }

  onFormSubmit = (newProduct) => {
    const isProductExist = !!this.findProduct(newProduct.id);
    let newProductArray;

    if (isProductExist) {
      newProductArray = this.state.products.map((item) => {
        let newItem;
        if (item.id === newProduct.id) {
          newItem = Object.assign({}, newProduct);
        } else {
          newItem = Object.assign({}, item);
        }
        return newItem;
      })
    } else {
      newProductArray = this.state.products.slice();
      newProductArray.push(newProduct);
    }

    this.setState({
      products: newProductArray,
    });
  }

  onFormCancel = () => {
    this.setState({
      editProduct: null,
      addingNewProduct: false,
    });
  }

  onAddNewProduct = () => {
    this.setState({
      addingNewProduct: true,
      editProduct: null,
      selectedProduct: null,
    })
  }

  render() {
    const products = this.state.products;
    const selectedProduct = this.state.selectedProduct;
    const editProduct = this.state.editProduct;
    const ids = products.map(function (item) {
      return item.id;
    });

    return <div>
      {
        !!products.length &&
        <table className='product-table' >
          <ProductTableHeader titles={Object.keys(products[0])} />
          <ProductTableBody rows={products} keys={ids}
            selectedRowId={selectedProduct ? selectedProduct.id : null}
            onRowDelete={this.onRowDelete}
            onRowSelect={this.onRowSelect}
            onRowEdit={this.onRowEdit} />
        </table>
      }
      {
        !products.length &&
        <p>There is no products</p>
      }
      <button onClick={this.onAddNewProduct}>Add new product</button>
      {
        !!selectedProduct &&
        <ProductCard product={selectedProduct} />
      }
      {
        (!!editProduct || this.state.addingNewProduct) &&
        <ProductForm product={editProduct}
          lastProductId={products.length ? products[products.length - 1].id : 0}
          onSubmit={this.onFormSubmit}
          onCancel={this.onFormCancel} />
      }
    </div>;
  }
}
