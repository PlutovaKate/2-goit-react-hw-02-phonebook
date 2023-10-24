import { nanoid } from 'nanoid';
import React from 'react';
import { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import FilterBar from './FilterBar/FilterBar';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        option => option.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  render() {
    const visibleContact = this.state.contacts.filter(contact =>
      this.state.filter === ''
        ? contact
        : contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <FilterBar
          filter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
      </Container>
    );
  }
}
