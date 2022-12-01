import './style.css';
import React from 'react';

const footer = (props) => (
	<footer className='footer'>
		Desenvolvido com <i className='fa fa-heart text-danger' /> por
		<strong>
			{' '}
			Pedro <span className='text-danger'>HBS</span>
		</strong>
	</footer>
);

export default footer;
