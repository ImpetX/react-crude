import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './LiftState/root';
import Hello from './modules/hello/Hello';

const app = document.getElementById('app');

ReactDOM.render(<Hello name='Kamal' />, app);