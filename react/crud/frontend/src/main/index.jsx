import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import React from 'react';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

const index = (props) => (
	<div className='app'>
		<Logo />
		<Nav />
		<Main icon='home' title='Start' subtitle='CRUD react project.' />
		<Footer />
	</div>
);

export default index;
