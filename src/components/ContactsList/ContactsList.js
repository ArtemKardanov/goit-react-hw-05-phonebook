import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactsList.module.css';
import Contact from '../Contact/Contact';
import popTransition from '../../transitions/pop.module.css';

const ContactsList = ({ contacts, onDeleteNumber }) => {
  return (
    <TransitionGroup component="ul" className={styles.itemsList}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={200}
          classNames={popTransition}
          unmountOnExit
        >
          <li className={styles.item}>
            <Contact
              {...contact}
              onDeleteNumber={() => onDeleteNumber(contact.id)}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactsList;
