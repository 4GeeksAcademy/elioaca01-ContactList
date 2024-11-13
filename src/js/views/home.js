import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const [userDelete,setUserDelete] = useState("")

	return (
		<>
			<Navbar />
			<div className="container border">
				{
					store.contacts.map((item) => {
						return (
							<div className="row border p-3" key={item.id} >
								<div className="col-2">
									<img src="https://picsum.photos/200/300" />
								</div>
								<div className="col-3">
									<h5 className="pb-3">{item.name}</h5>
									<span><i className="fa-solid fa-location-dot pe-2"></i>{item.address}</span><br />
									<span><i className="fa-solid fa-phone pe-2"></i>{item.phone}</span><br />
									<span><i className="fa-solid fa-envelope pe-2"></i>{item.email}</span>
								</div>
								<div className="col-7 d-flex justify-content-end">
									<span className="pt-1 ">
										<Link to={`/edit-contact/${item.id}`}>
											<button type="button" className="btn btn-primary mx-4" >
												<i className="fa-solid fa-pencil"></i>
											</button>
										</Link>
										<button type="button" onClick={()=>setUserDelete(item.id)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
											<i className="fa-solid fa-trash"></i>
										</button>
									</span>

									{/* MODAL */}


									<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">Seguro quieres eliminar el contacto?</h5>
													<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
												</div>
												<div className="modal-body">
													No podras acceder a el nuevamente
												</div>
												<div className="modal-footer">
													<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Regresar</button>
													<button type="button" onClick={()=>actions.deleteContact(userDelete)} className="btn btn-primary" data-bs-dismiss="modal">Borrar</button>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						)
					})
				}
			</div>
		</>
	)
}
