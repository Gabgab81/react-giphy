import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// import { greet } from './greet';
// import greet from './greet';

// console.log(greet("Gab"));

const Hello = ({ name }) => {
  return (
    <div>
      Hello and welcome,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
