import css from './Filter.module.css';

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
