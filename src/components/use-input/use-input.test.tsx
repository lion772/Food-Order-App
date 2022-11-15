import React from 'react';
import ReactDOM from 'react-dom';
import UseInput from './UseInput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UseInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});