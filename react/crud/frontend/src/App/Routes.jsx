import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserCrud from '../components/user/UserCrud';
import Home from '../components/template/Home';

const router = (props) => (
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route exact path='/users' element={<UserCrud />} />
		<Route exact path='*' element={<Home />} />
	</Routes>
);

export default router;
