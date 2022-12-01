import './style.css';
import React from 'react';

const item = (props) => (
	<a className='nav-item' href={props.link}>
		<i className={`fa fa-${props.icon}`} /> {props.label}
	</a>
);

export default item;
