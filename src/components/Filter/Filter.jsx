import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ setFilter }) => {
const [value, setValue] = useState('');

const handleChange = (event) => {
setValue(event.target.value);
setFilter(event.target.value);
};

return (
<label className={css.filter}>
Filter contacts by name
<input
     className={css.filterInput}
     value={value}
     onChange={handleChange}
     type="text"
   />
</label>
);
};


Filter.propTypes = {
setFilter: PropTypes.func.isRequired,
};

export default Filter;