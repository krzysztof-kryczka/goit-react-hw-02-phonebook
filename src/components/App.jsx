import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkContact = newContact => {
    const { contacts } = this.state;
    const isExists = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );
    return isExists;
  };

  addContact = newContact => {
    const check = this.checkContact(newContact);
    if (!check) {
      const { contacts } = this.state;
      contacts.push(newContact);
      this.setState({ contacts: contacts });
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };

  changeFilterValue = e => {
    this.setState({ filter: e.target.value });
  };

  deleteUser = e => {
    const { contacts } = this.state;
    const filtered = contacts.filter(contact => contact.id !== e.target.id);
    this.setState({ contacts: filtered });
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={values => this.addContact(values)} />
        <Filter onFilterChange={this.changeFilterValue} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClickHandler={this.deleteUser}
        ></ContactList>
      </>
    );
  }
}
