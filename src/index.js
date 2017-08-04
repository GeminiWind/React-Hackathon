import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LifeCycle from './LifeCycle.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LifeCycle />, document.getElementById('root'));
registerServiceWorker();
