import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// Want to render the <App> html component (JSX) inside the root div of the dom
// found in index.html
ReactDOM.render(<App />, document.getElementById('root'));

