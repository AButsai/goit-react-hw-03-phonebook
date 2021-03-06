import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import s from './App.module.css';

const LOCALSTOREGE_KEY = 'contacts-key';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LOCALSTOREGE_KEY));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(
        LOCALSTOREGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  onSubmit = data => {
    const contacts = [...this.state.contacts];

    for (const { name } of contacts) {
      if (name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }

    const contactId = nanoid();
    data.id = contactId;

    this.setState({ contacts: [...contacts, data] });
  };

  onFilterName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilterContacts = () => {
    const { contacts, filter } = this.state;

    return [...contacts].filter(
      ({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  };

  onDeleteContact = contactId => {
    this.setState({
      contacts: [...this.state.contacts].filter(({ id }) => id !== contactId),
      filter: '',
    });
  };

  render() {
    const filterContacts = this.onFilterContacts();

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm addContacts={this.onSubmit} />

        <h2 className={s.contactsTitle}>Contacts</h2>

        <Filter value={this.state.filter} onFilterName={this.onFilterName} />

        <ContactList
          filterContact={filterContacts}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
