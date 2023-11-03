import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson' },
      { id: nanoid(), name: 'Hermione Kline' },
      { id: nanoid(), name: 'Eden Clements' },
      { id: nanoid(), name: 'Annie Copeland' },
    ],
    name: '',
  };

	addContact = (newContact) => {
		const { contacts } = this.state;
		contacts.push(newContact);
		this.setState({ contacts: contacts });
	};

  render() {
    return (
      <>
        <ContactForm onSubmit={values => this.addContact(values)} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
