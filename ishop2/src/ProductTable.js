import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableHeader from './ProductTableHeader';
import ProductTableBody from './ProductTableBody';

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
    }

    this.onRowDelete = this.onRowDelete.bind(this);
  }

  onRowDelete(e, rowIndex) {
    e.stopPropagation();

    const newArray = this.state.products;
    let deleteIndex;

    newArray.forEach((item, index) => {
      if(item.id === rowIndex) {
        deleteIndex = index;
      }
    })

    newArray.splice(deleteIndex, 1);

    this.setState((prevState) => {
      return {
        products: newArray,
      }
    });
  }

  render() {
    const products = this.state.products;

    const ids = products.map(function (item) {
      return item.id;
    });

    return <div>
      { !!products.length && 
        <table className='product-table' >
          <ProductTableHeader titles={Object.keys(products[0])} />
          <ProductTableBody rows={products} keys={ids} onRowDelete={this.onRowDelete}/>
        </table>
      }
      { !products.length && 
        <p>There is no products</p>
      }
    </div>;
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