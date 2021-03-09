import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <lable className={styles.filter}>
      <p className={styles.filterTitle}>Find contacts by name</p>
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </lable>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
