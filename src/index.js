import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleButton from './ToggleButton.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToggleButton />, document.getElementById('root'));
registerServiceWorker();
