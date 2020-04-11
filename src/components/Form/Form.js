import React, { Component } from 'react';
import styles from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleNumberChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <p className={styles.name}>name:</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          autoComplete="off"
          className={styles.input}
        />
        <p className={styles.name}>number:</p>
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          autoComplete="off"
          className={styles.input}
        />
        <button
          className={styles.button}
          disabled={name && number ? false : true}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}
