import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const item = (props) => (
	<Link className='nav-item' to={`${props.link}`}>
		<i className={`fa fa-${props.icon}`} /> {props.label}
	</Link>
);

export default item;
