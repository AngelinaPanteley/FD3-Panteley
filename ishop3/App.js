import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import ProductTable from './components/ProductTable';

const products = require('./products.json');

ReactDOM.render(<ProductTable products={products} />, document.getElementById('root'));
