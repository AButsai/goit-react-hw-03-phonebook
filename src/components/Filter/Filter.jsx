import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = props => {
  const { value, onFilterName } = props;
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterName}
        placeholder="Enter search name"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterName: PropTypes.func.isRequired,
};

export default Filter;
