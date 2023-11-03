import React, { Component } from 'react';
import PropTypes from "prop-types";

import css from './ContactList.module.css';

const ContactList = props => {
  const { contacts } = props;

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contacts__item} key={id}>
            {name} : {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

export default ContactList;
