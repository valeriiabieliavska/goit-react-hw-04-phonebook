import { useState, useEffect} from 'react';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

import css from './App.module.css';


const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const getInitialContacts = () => {
//   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//   if (parsedContacts) {
//     return parsedContacts;
//   } else {
//     return INITIAL_CONTACTS;
//   }
// };

export const App = () => {
  const [contacts, setContacts] = useState(() => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (parsedContacts) {
    return parsedContacts;
  } else {
    return INITIAL_CONTACTS;
  }
});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = 
    contact => {
      contacts.find(e => e.name.toLowerCase() === contact.name.toLowerCase())
        ? alert(`${contact.name} is already in contacts`)
        : setContacts(prevContacts => [contact, ...prevContacts]);
    }

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const handleDelete = 
    id => {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== id)
      );
    }

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} setFilter={handleFilter} />
      {contacts.length === 0 ? (
        <p className={css.message}>There are no contacts in the Phonebook</p>
      ) : (
        <ContactList contacts={filteredContacts} onClick={handleDelete} />
      )}
    </>
  );
}







// const CONTACTS_INITIAL = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const getContactsInitial = () => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
//   else {
//     return CONTACTS_INITIAL;
//   }
// }

// export const App = () => {
//   const [contacts, setContacts] = useState(getContactsInitial);
//     const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);


//   }