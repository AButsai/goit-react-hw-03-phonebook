import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';

import s from './ContactList.module.css';

const ContactList = ({ filterContact, deleteContact }) => {
  return (
    <ul className={s.list}>
      {filterContact.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contacts={{ id, name, number }}
          deleteContact={deleteContact}
        />
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
