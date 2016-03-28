import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import HomePage from './pages/HomePage';

// Styles
import 'normalize.css';
import './styles/main.scss';

WebFont.load({
  typekit: { id: 'gnf2mov' },
});


render(<HomePage />, document.getElementById('root'));
