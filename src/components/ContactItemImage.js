import React from 'react';
import '../styles/ContactItemImage.css';

function ContactItemImage ({ imageUrl }) {
	return (
	  <div className="contact-item__image">
	  	<img src={ imageUrl } alt="Profil avatar"/>
	  </div>
	);
}

export default ContactItemImage;