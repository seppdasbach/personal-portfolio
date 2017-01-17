import React from 'react';
import { render } from 'react-dom';

import App from './app.jsx';
import './index.scss';

const entryNode = document.querySelector('.app');


render(<App/>, entryNode);


if(module.hot){
    module.hot.accept('./app.jsx', () => {
        const NextApp = require('./app.jsx').default;
        render(<NextApp/>, entryNode);
    });
}
