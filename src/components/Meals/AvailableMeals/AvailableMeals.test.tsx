import React from 'react';
import ReactDOM from 'react-dom';
import AvailableMeals from './AvailableMeals';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AvailableMeals />, div);
  ReactDOM.unmountComponentAtNode(div);
});