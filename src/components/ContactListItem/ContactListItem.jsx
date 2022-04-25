import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = props => {
  const { contacts, deleteContact } = props;

  return contacts.map(({ id, name, number }, index) => (
    <li key={id} className={s.item}>
      <span className={s.spanNumber}>{index + 1}.</span>
      <span className={s.span}>
        {name}: {number}
      </span>
      <button
        id={id}
        className={s.btn}
        onClick={() => {
          deleteContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
