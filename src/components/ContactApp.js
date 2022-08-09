import React from 'react';
import ContactList from './ContactList';
import {getData} from '../utils/data';
import ContactInput from './ContactInput';
import '../styles/ContactApp.css';

class ContactApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// Menyimpan data dari data.js
			contacts: getData(),
		}

		// Proses binding this agar ketika child mengakses this tidak mengambil yang milik window, tapi mengambil dari class ContactApp ini.
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onAddContactHandler = this.onAddContactHandler.bind(this);
	}
	// Menginisasi proses method tombol delete lalu dilakukan drill pada child yg memegang akses delete button.
	onDeleteHandler(id) {
		const contacts = this.state.contacts.filter(contact => contact.id !== id);
		this.setState({contacts});
	}

	onAddContactHandler({ name, tag }) {
		this.setState((prevState) => {
			return {
				contacts: [
				...prevState.contacts,
				{
					id: +new Date(),
					name,
					tag,
					imageUrl: '/images/default.jpg',
				}
				]
			}
		})
	}

	render() {
		return (
		 <div className="contact-app">
		 <h1>Member Application</h1>
		 <h2>Add Member</h2>
		 <ContactInput addContact = {this.onAddContactHandler} />
		 <h3>Member List</h3>
		 <ContactList contacts = {this.state.contacts} onDelete = {this.onDeleteHandler}
		 />
		 </div>
		);
	}
}

export default ContactApp;