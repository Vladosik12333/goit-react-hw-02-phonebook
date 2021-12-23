import ContactsItem from 'components/ContactsItem';
import { List } from './Contacts.styled';
import propTypes from 'prop-types';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
}

Contacts.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
