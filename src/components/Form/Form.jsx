import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };


  handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget.name);

    this.setState({
      [name]: value,
    });
  };

  addContact = event => {
    event.preventDefault();
    console.log(this.state);

    const id = nanoid();

      this.props.onSubmit(this.state, id);
      this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.addContact} className={css.contactsForm}>
        <label className={css.inputName}>
          Name
          <input className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={css.inputName}>
          Number
          <input className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={css.btn} type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
