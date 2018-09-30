import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

export default class ProductCard extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { name, price, qty, photo, color } = this.props.product;
    return <div className="product-card">
      <img src={photo} alt="product-card" className="product-card__photo" />
      <div className="product-card__info">
        <p className="product-card__name">{name}</p>
        <p>Price: {price}$</p>
        <p>Color: {color}</p>
        <p>Qty: {qty}</p>
      </div>
    </div>
  }
}