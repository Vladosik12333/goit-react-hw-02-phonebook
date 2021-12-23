import React, { Component } from 'react';
import shortid from 'shortid';
import FormAddContact from 'components/FormAddContact';
import FindContact from 'components/FindContact';
import Contacts from 'components/Contacts';
import Title from 'components/TemplateTitle';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContactInput = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  };

  submitContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name))
      return alert(`${name} is already in contacts.`);

    this.setState(state => {
      return {
        contacts: [...state.contacts, { name, number, id: shortid.generate() }],
      };
    });
  };

  deleteContact = id => {
    return this.setState(state => {
      return { contacts: state.contacts.filter(contact => contact.id !== id) };
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <>
        <Title title="Phonebook" />
        <FormAddContact onSubmit={this.submitContact} />
        <Title title="Contacts" />
        <FindContact
          filter={filter}
          handleContactInput={this.handleContactInput}
        ></FindContact>
        <Contacts
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
