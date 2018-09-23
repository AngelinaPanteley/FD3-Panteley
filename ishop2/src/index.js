import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';

const products = [
  {
    id: 1,
    name: 'Смартфон TeXet iX-maxi TM-4982',
    price: '206$',
    photo: 'https://shop.by/images/texet_ix_maxi_tm_4982_1.jpg',
    qty: 5,
    color: 'black',
  },
  {
    id: 2,
    name: 'Смартфон Samsung J2 Prime SM-G532FZKDSER 5',
    price: '246$',
    photo: 'https://www.elmarket.by/upload/iblock/37c/37c4dbea1e750aa67fd645b93e83e4b2.jpg',
    qty: 2,
    color: 'black',
  },
  {
    id: 3,
    name: 'Смартфон Microsoft Lumia 535 Dual SIM',
    price: '267$',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyzqI06DKUF-4JRuiwjH6yo_jJQJ6t6GZ07s6Deu3uTkzlYUUwQ',
    qty: 8,
    color: 'black',
  },
  {
    id: 4,
    name: 'Смартфон Nokia 230 Dual SIM Dark Silver',
    price: '289$',
    photo: 'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/o/honor_3c_lite_black_02.jpg',
    qty: 4,
    color: 'silver',
  },
  {
    id: 5,
    name: 'Смартфон LeEco Le Pro 3 Le X720 6Gb/64Gb',
    price: '212$',
    photo: 'https://shop.by/images/leeco_le_pro_3_le_x720_(6gb_64gb)_1.jpg',
    qty: 6,
    color: 'gold',
  },
]

ReactDOM.render(<ProductTable products={products} />, document.getElementById('root'));
