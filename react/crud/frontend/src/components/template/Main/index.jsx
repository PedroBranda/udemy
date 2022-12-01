import './style.css';
import React from 'react';
import Header from '../Header';

const main = (props) => (
	<React.Fragment>
		<Header {...props} />
		<main className='content'>Content</main>
	</React.Fragment>
);

export default main;
