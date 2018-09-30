import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductFormField.css';

export default class ProductFormField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    validationError: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }

  onInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.props.onInputChange(key, value);
  }

  render() {
    const name = this.props.name;
    return <div className="product-form-field">
      <label htmlFor={name} className="product-form-field__label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <input type={this.props.type} name={name} id={name}
        className="product-form-field__input"
        value={this.props.value} onChange={this.onInputChange} />
      {!this.props.isValid && <span className="product-form-field__error">
        {this.props.validationError}
      </span>}
    </div>
  }
}