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
    name: '',
    number: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    contacts.push(newContact);
    this.setState({ contacts: contacts });
  };

  changeFilterValue = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={values => this.addContact(values)} />
        <Filter onFilterChange={this.changeFilterValue} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        ></ContactList>
      </>
    );
  }
}
