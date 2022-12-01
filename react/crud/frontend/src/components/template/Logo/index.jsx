import './style.css';
import _logo from '../../../assets/img/logo.png';
import React from 'react';

const logo = (props) => (
	<aside className='logo'>
		<a href='/' className='logo'>
			<img src={_logo} alt='logo' />
		</a>
	</aside>
);

export default logo;
