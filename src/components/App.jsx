import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = data => {
    const contacts = [...this.state.contacts];

    for (const { name } of contacts) {
      if (name === data.name) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }

    contacts.push(data);
    this.setState({ contacts: contacts });
  };

  // Массив для отфильтрованных контактов
  filterContacts = [];

  onFilterName = e => {
    if (e.currentTarget.value === '') {
      this.setState({ filter: '' });
      this.filterContacts = [];
      return;
    }

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });

    this.filterContacts = [...this.state.contacts].filter(
      ({ name }) => name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  };

  arrayIteration = (data, contactId) => {
    return [...data].filter(({ id }) => id !== contactId);
  };

  onDeleteContact = e => {
    const contactId = e.currentTarget.id;

    this.filterContacts = this.arrayIteration(this.filterContacts, contactId);
    this.setState({ filter: '' });

    const contacts = this.arrayIteration(this.state.contacts, contactId);

    this.setState({ contacts: contacts });
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm addContacts={this.onSubmit} />

        <h2 className={s.contactsTitle}>Contacts</h2>

        <Filter value={this.state.filter} onFilterName={this.onFilterName} />

        <ContactList
          contacts={this.state.contacts}
          filterContact={this.filterContacts}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
