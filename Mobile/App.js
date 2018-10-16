"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:2}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:3}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:1},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:5},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

