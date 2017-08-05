import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact.jsx';
import About from './About.jsx'
import User from './User.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/user/:id" component={User} />
		</div>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
