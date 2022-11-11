import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartItem item={{
    id: '',
    name: '',
    amount: 0,
    price: 0
  }} onAdd={function (event: React.MouseEvent<Element, MouseEvent>): void {
    throw new Error('Function not implemented.');
  } } onRemove={function (event: React.MouseEvent<Element, MouseEvent>): void {
    throw new Error('Function not implemented.');
  } } />, div);
  ReactDOM.unmountComponentAtNode(div);
});