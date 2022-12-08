import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';

const routes = [{
	path: '/',
	Component: HomePage,
	exact: true,
}];

export const WebRoutes = () => (
	<Router>
		<Routes>
			{routes.map((route, index) => (
				<Route 
					key={index} 
					path={route.path} 
					exact={route.exact} 
					element={<route.Component />}
                />
			))}
		</Routes>
	</Router>
)