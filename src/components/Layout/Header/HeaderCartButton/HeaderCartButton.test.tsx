import React from 'react';
import ReactDOM from 'react-dom';
import HeaderCartButton from './HeaderCartButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderCartButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});