import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartItem key={undefined} name={''} amount={0} price={0} onAdd={function (): void {
    throw new Error('Function not implemented.');
  } } onRemove={function (): void {
    throw new Error('Function not implemented.');
  } }  />, div);
  ReactDOM.unmountComponentAtNode(div);
});