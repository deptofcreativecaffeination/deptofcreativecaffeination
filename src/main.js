import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';

// Styles
import 'normalize.css';
import './styles/main.scss';

WebFont.load({
  typekit: { id: 'gnf2mov' },
});

render(<App />, document.getElementById('root'));
