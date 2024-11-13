import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const editedContact = {
	name: "",
	phone: "",
	email: "",
	address: ""
}

const EditContact = () => {
	const {store , actions} = useContext(Context)
	const {theid} = useParams()
	const [contact,setContact] = useState(editedContact)
	const [edited,setEdited] = useState(false)

	const handleChange = (evt) => {
		setContact({
			...contact,
			[evt.target.name]: evt.target.value
		})
	}

	const edit = async (theid,contact) => {
		const editado = await actions.updateContact(theid,contact)
		if (editado){
			setEdited(true)
			setTimeout(()=>{setEdited(false)},1000)
		}
	}

	return(
        <div className="container pt-4">
			<h1 className="fs-1 text-center">Editar contacto</h1>
			<form className="form p-2 my-3 border border-1">
				<div className="mb-3">
					<label htmlFor="inputName" className="form-label">Nombre</label>
					<input
						type="text"
						className="form-control"
						name="name"
						value={contact.name}
						id="inputName" 
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">Email</label>
					<input 
						type="email" 
						className="form-control" 
						name="email" 
						value={contact.email} 
						id="inputEmail" 
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="inputPhone" className="form-label">Telefono</label>
					<input 
						type="text" 
						className="form-control" 
						name="phone" 
						value={contact.phone} 
						id="inputPassword"
						onChange={handleChange} 
						/>
				</div>
				<div className="mb-3">
					<label htmlFor="inputAddress" className="form-label">Direccion</label>
					<input 
						type="text" 
						className="form-control" 
						name="address" 
						value={contact.address} 
						id="inputAddress" 
						onChange={handleChange}
					/>
				</div>

				<button type="button" onClick={()=>edit(theid,contact)} className="btn btn-primary w-100">Cambiar</button>
				{edited && <div class="alert alert-success mt-3" role="alert">
 						 	Contacto editado con exito
						</div>}
			</form>
			<Link to="/">
				<button className="btn btn-secondary">Regresar a contactos</button>
			</Link>
		</div>
	)
    
}

export default EditContact