import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter, title }) => (
  <form className={styles.form}>
    <p className={styles.name}>{title}</p>
    <input
      autoComplete="off"
      type="text"
      value={value}
      name="name"
      onChange={onChangeFilter}
      required
      className={styles.input}
    />
  </form>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
