import './style.css';
import React from 'react';
import Main from '../Main';

const headerProps = {
	icon: 'home',
	title: 'Start',
	subtitle: 'CRUD react project.',
};

const home = (props) => (
	<Main {...headerProps}>
		<div className='display-4'>Welcome!</div>
		<hr />
		<p className='mb-0'>React system to create, update and delete.</p>
	</Main>
);

export default home;
