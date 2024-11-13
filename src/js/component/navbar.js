import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="p-3 mb-3 d-flex justify-content-end">
			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn btn-primary">Agregar contacto</button>
				</Link>
			</div>
		</nav>
	);
};
