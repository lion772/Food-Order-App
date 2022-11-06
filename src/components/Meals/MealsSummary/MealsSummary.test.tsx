import React from 'react';
import ReactDOM from 'react-dom';
import MealsSummary from './MealsSummary';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MealsSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});