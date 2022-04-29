import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import '../../App.css';

const Layout=()=> {
	return (
		<div>
			<header>
				<NavLink className="menuItem" to="/">Home</NavLink>
				<NavLink className="menuItem" to="/users">Users</NavLink>
				<NavLink className="menuItem" to="/about">About</NavLink>
	  	</header>
			<main>
				<Outlet/>
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default Layout;

