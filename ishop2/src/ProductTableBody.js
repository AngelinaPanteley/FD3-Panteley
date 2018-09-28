import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTableRow from './ProductTableRow';

class ProductTableBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRow: null,
    }

    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick(e) {
    this.setState({
      selectedRow: e.target.closest('tr').getAttribute('data-index'),
    });
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

      const selected = productValues[0]==this.state.selectedRow;

      return <ProductTableRow key={keys[index]} productValues={productValues} 
                              photoKeyIndex={photoKeyIndex} onRowClick={this.onRowClick} 
                              onRowDelete={this.props.onRowDelete}
                              selected={selected}/>;
    });

    return <tbody className='product-table__body'>{rows}</tbody>;
  }
}

ProductTableBody.propTypes = {
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

export default ProductTableBody;