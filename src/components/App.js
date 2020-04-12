import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import popTransition from '../transitions/pop.module.css';
import titleSlide from '../transitions/titleSlide.module.css';

import shortid from 'shortid';
import styles from './App.module.css';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import Title from './Title/Title';
import Alert from './Alert/Alert';

const filterContactsByQuery = (filter, contacts) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = { contacts: [], filter: '', showMessags: false };

  onAddContact = contact => {
    const { name } = contact;

    const contactsArray = this.state.contacts;

    const nameExist = contactsArray.find(con => con['name'] === name);

    if (nameExist) {
      this.setState({ showMessage: true });

      setTimeout(() => {
        this.setState({ showMessage: false });
      }, 2000);

      return;
    }

    const toAddContact = {
      ...contact,
      id: shortid(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, toAddContact],
    }));
  };

  deleteNumber = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter, showMessage } = this.state;
    const isFilterOpen = contacts.length >= 2 ? true : false;
    const isListOpen = contacts.length > 0 ? true : false;

    const filteredContacts = filterContactsByQuery(filter, contacts);
    return (
      <div className={styles.wrapper}>
        <CSSTransition in appear timeout={500} classNames={titleSlide}>
          <Title title="Phonebook" />
        </CSSTransition>

        <CSSTransition
          classNames={popTransition}
          in={showMessage}
          unmountOnExit
          timeout={250}
        >
          <Alert />
        </CSSTransition>

        <Form onAddContact={this.onAddContact} />
        <CSSTransition
          in={isFilterOpen}
          timeout={250}
          unmountOnExit
          classNames={popTransition}
        >
          <Filter
            value={filter}
            title="find contacts by name:"
            onChangeFilter={this.changeFilter}
          />
        </CSSTransition>

        <CSSTransition
          in={isListOpen}
          timeout={250}
          unmountOnExit
          classNames={popTransition}
        >
          <ContactsList
            contacts={filteredContacts}
            onDeleteNumber={this.deleteNumber}
          />
        </CSSTransition>
      </div>
    );
  }
}
