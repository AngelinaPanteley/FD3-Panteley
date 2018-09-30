import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductFormField from './ProductFormField';
import './ProductForm.css';

export default class ProductForm extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      color: PropTypes.string,
    }),
    lastProductId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const product = this.setDefaultProduct(props.product, props.lastProductId);
    const validation = this.setDefaultValidation(product);

    this.state = {
      product,
      ...validation,
      title: props.product ? 'Edit existing product' : 'Add new product',
      submitValue: props.product ? 'Save' : 'Add',
    }
  }

  componentWillReceiveProps(props) {
    const product = this.setDefaultProduct(props.product, props.lastProductId);
    const validation = this.setDefaultValidation(product);

    this.setState({
      product,
      ...validation,
      title: props.product ? 'Edit existing product' : 'Add new product',
      submitValue: props.product ? 'Save' : 'Add',
    });
  }

  setDefaultProduct = (product, lastProductId) => {
    return product ? product : {
      id: ++lastProductId,
      name: '',
      price: 0,
      photo: '',
      color: '',
      qty: 0,
    };
  }

  setDefaultValidation = (product) => {
    const that = this;
    return {
      isNameValid: that.validateStringInput(product.name),
      isPriceValid: that.validateNumberInput(product.price),
      isPhotoValid: that.validateStringInput(product.photo),
      isColorValid: that.validateStringInput(product.color),
      isQtyValid: that.validateNumberInput(product.qty),
    }
  }

  handleInputChange = (key, value) => {
    const newProduct = Object.assign(this.state.product);
    newProduct[key] = value;
    const isValid = (key === 'price' || key === 'qty')
      ?
      this.validateNumberInput(value)
      :
      this.validateStringInput(value);

    let validKey = key.charAt(0).toUpperCase() + key.slice(1);
    validKey = `is${validKey}Valid`;

    this.setState({
      product: newProduct,
      [validKey]: isValid,
    })
  }

  validateNumberInput = (value) => !!value && !!parseInt(value);

  validateStringInput = (value) => !!value;

  isFormValid = () => {
    return this.state.isNameValid && this.state.isPriceValid &&
      this.state.isPhotoValid && this.state.isColorValid &&
      this.state.isQtyValid;
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newProduct = Object.assign({}, this.state.product);
    newProduct.price = +newProduct.price;
    newProduct.qty = +newProduct.qty;

    this.setState({
      product: newProduct
    }, () => {
      this.props.onSubmit(this.state.product);
      this.props.onCancel();
    });
  }

  render() {
    const { id, name, price, photo, color, qty } = this.state.product;
    const { isNameValid, isPriceValid, isPhotoValid, isColorValid, isQtyValid } = this.state;
    const isFormValid = this.isFormValid();

    return <form className="product-form" onSubmit={this.onSubmit}>
      <p className="product-form__title">{this.state.title}</p>
      <p>ID: {id}</p>
      <ProductFormField name="name" value={name} type="text"
        onInputChange={this.handleInputChange} isValid={isNameValid}
        validationError='Please fill the field. Value must be a valid string' />
      <ProductFormField name="price" value={price} type="number"
        onInputChange={this.handleInputChange} isValid={isPriceValid}
        validationError='Please fill the field. Value must be an integer number greater than 0' />
      <ProductFormField name="photo" value={photo} type="text"
        onInputChange={this.handleInputChange} isValid={isPhotoValid}
        validationError='Please fill the field. Value must be a valid url' />
      <ProductFormField name="color" value={color} type="text"
        onInputChange={this.handleInputChange} isValid={isColorValid}
        validationError='Please fill the field. Value must be a valid string' />
      <ProductFormField name="qty" value={qty} type="number"
        onInputChange={this.handleInputChange} isValid={isQtyValid}
        validationError='Please fill the field. Value must be an integer number greater than 0' />
      <div className="product-form__buttons">
        <input type="submit" value={this.state.submitValue}
          disabled={!isFormValid} />
        <button onClick={this.props.onCancel}>Cancel</button>
      </div>
    </form>
  }
}