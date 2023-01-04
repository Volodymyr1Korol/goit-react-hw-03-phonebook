import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ setFilter }) => {
  return (
    <div className={css.filterSection}>

      <input
        className={css.inputField}
        onChange={setFilter}
        placeholder="Filter Contacts"
      />
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
}