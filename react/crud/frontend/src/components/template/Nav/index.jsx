import './style.css';
import React from 'react';
import Item from '../NavItem';

const nav = (props) => (
	<aside className='menu-area'>
		<nav className='menu'>
			<Item link='/' icon='home' label='Home' />
			<Item link='/users' icon='user' label='Player' />
		</nav>
	</aside>
);

export default nav;
