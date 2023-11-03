import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';



export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson'},
      { id: nanoid(), name: 'Hermione Kline'},
      { id: nanoid(), name: 'Eden Clements'},
      { id: nanoid(), name: 'Annie Copeland'},
    ],
    name: '',
  };

  render() {
    return (
      <>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
