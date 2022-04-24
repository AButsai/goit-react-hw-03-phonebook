import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';

import s from './ContactList.module.css';

const ContactList = ({ contacts, filterContact, deleteContact }) => {
  return (
    <ul className={s.list}>
      {filterContact.length === 0 ? (
        <ContactListItem contacts={contacts} deleteContact={deleteContact} />
      ) : (
        <ContactListItem
          contacts={filterContact}
          deleteContact={deleteContact}
        />
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
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
