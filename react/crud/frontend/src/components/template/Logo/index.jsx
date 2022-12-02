import './style.css';
import _logo from '../../../assets/img/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const logo = (props) => (
	<aside className='logo'>
		<Link to='/' className='logo'>
			<img src={_logo} alt='logo' />
		</Link>
	</aside>
);

export default logo;
