import React, { Component } from 'react';
import { Form, Container, Button } from './FormAddContact.styled';
import propTypes from 'prop-types';

export default class FormAddContact extends Component {
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleContactInput = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  };

  preSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.preSubmit}>
        <Container>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleContactInput}
          />
        </Container>
        <Container>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleContactInput}
          />
        </Container>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
