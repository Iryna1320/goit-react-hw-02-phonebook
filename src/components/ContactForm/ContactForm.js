import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import PropTypes, { number } from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  onAddContact = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { onAddContact, inputChange, nameInputId, numberInputId } = this;
    return (
      <form className={styles.formContact} onSubmit={onAddContact}>
        <label htmlFor={nameInputId} className={styles.formLabel}>
          Name
          <input
            type="text"
            placeholder="введите имя"
            name="name"
            value={name}
            className={styles.formInput}
            onChange={inputChange}
            id={nameInputId}
          />
        </label>

        <label htmlFor={numberInputId} className={styles.formLabel}>
          Number
          <input
            type="telephone"
            placeholder="введите номер"
            name="number"
            className={styles.formInput}
            value={number}
            onChange={inputChange}
            id={numberInputId}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//   //   message: PropTypes.string.isRequired,
// };

export default ContactForm;
