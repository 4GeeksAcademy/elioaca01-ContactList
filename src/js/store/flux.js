

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase : "https://playground.4geeks.com/contact/",
			contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
				 getAllContacts: async () => {
					const store = getStore()
					try{
						const response = await fetch(store.urlBase+"agendas/elio/contacts")
						const data = await response.json()
						 if (response.ok){
							setStore({
								contacts:data.contacts
							})
						 }else{
							getActions().createAgenda()
						 }
					}catch(error){
						console.log(error)
					}
				 },

				saveContact: async (contact) => {
					const store = getStore();
					try{
						const response = await fetch(store.urlBase+"agendas/elio/contacts",{
							method:"POST",
							headers:{
								"Content-Type": "application/json"
							},
							body:JSON.stringify(contact) 
						})
						 if(response.ok){
						 	getActions().getAllContacts()
							return true
						 }
						
					}catch(error){
						console.log(error)
					}
				},

				deleteContact: async (id) => {
					const store = getStore()
					try{
						const response = await fetch(store.urlBase+"agendas/elio/contacts/"+id,{
							method:"DELETE"
						})

						if(response.ok){
							getActions().getAllContacts()
						}

					}catch(error){
						console.log(error);
					}
				},

				createAgenda: async () => {
					const store = getStore()
					try{
						const response = await fetch(store.urlBase+"agendas/elio",{
							method:"POST"
						})

						if(response.ok){
							console.log("usuario creado")
						}
					}catch(error){
						console.log(error)
					}
				},

				updateContact: async (id,contact) => {
					const store = getStore()

					try{
						const response = await fetch(store.urlBase+"agendas/elio/contacts/"+id,{
							method:"PUT",
							headers:{
								"Content-Type":"application/json"
							},
							body:JSON.stringify(contact)
						})
						if(response.ok){
							getActions().getAllContacts()
							return true
						}
					}catch(error){
						console.log(error)
					}
				}


				//reset the global store
			
			
		}
	};
};

export default getState;
