import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, setFilter }) => (
  <label className={css.filter}>
    Filter contacts by name
    <input
      className={css.filterInput}
      value={value}
      onChange={setFilter}
      type="text"
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
