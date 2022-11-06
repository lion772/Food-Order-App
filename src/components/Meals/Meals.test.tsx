import React from 'react';
import ReactDOM from 'react-dom';
import Meals from './Meals';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Meals />, div);
  ReactDOM.unmountComponentAtNode(div);
});