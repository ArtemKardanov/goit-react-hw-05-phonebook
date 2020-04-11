import React, { Fragment } from 'react';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteNumber }) => (
  <Fragment>
    <p className={styles.info}>
      {name}
      <span className={styles.span}>{number}</span>
    </p>
    <button className={styles.button} onClick={onDeleteNumber} type="button">
      &times;
    </button>
  </Fragment>
);

export default Contact;
