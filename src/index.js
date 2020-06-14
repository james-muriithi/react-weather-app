import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'weathericons/css/weather-icons.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;

    @media (max-width: 1000px) {
      background-color: white;
    }
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();