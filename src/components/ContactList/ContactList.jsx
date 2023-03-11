import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
  return (
    <>
    <ul className={css.list}>
      {contacts.map(({id, name, number}) => (
        <li key={id} className={css.item} id={id}>
          {name}: {number}
          <button className={css.btnDelete} type="button" onClick={() => onClick(id)}>
            Delete
          </button>
        </li>
      ))}
      </ul>
      </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
