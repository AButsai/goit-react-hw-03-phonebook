import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';

import s from './ContactList.module.css';

const ContactList = ({ filterContact, deleteContact }) => {
  return (
    <ul className={s.list}>
      {filterContact.map(contact => (
        <ContactListItem contacts={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
