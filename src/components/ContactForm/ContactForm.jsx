import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

class ContactForm extends Component {

  handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const id = nanoid();

    console.log({ id, name });

    this.props.onSubmit({ id, name });

    e.target.reset();
  };

  render() {
    return (
      <>
      <div className={css.form}>
        <h2 className={css.form__title}>Phonebook</h2>
        <form className={css.form__form} onSubmit={this.handleSubmit}>
          <label className={css.form__label} htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={css.form__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button className={css.form__btn} type="submit">Add contact</button>
        </form>
        </div>
      </>
    );
  }
}

export default ContactForm;
