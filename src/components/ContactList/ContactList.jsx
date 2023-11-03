import React, { Component } from 'react';

import css from './ContactList.module.css';

const ContactList = props => {
  const { contacts } = props;

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {contacts.map(({ id, name }) => (
          <li className={css.contacts__item} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
