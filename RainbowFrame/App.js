"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Rainbow from './components/Rainbow';

let colorsArr = require('./colors.json');

ReactDOM.render(
  <Rainbow
    colors={colorsArr}
  />
  , document.getElementById('container')
);

