"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import LineSeparator from './components/LineSeparator';

let text = require('./text.json');

ReactDOM.render(
  <LineSeparator
    text={text}
  />
  , document.getElementById('container')
);

