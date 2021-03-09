import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getName = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (this.getName(name)) {
      alert('Такой контакт существует');
      return;
    } else {
      if (contact.name === '' && contact.number === '') {
        return alert('Просьба заполнить поля');
      } else {
        this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
      }
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContactName = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const { addContact, deleteContact, changeFilter } = this;

    const visibleContacts = this.getVisibleContactName();

    return (
      <div className="App">
        <h1 className="App_title">Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2 className="App_title">Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
