import { Item } from './ContactsItem.styled';
import propTypes from 'prop-types';

export default function ContactsItem({ contact, deleteContact }) {
  const { id, name, number } = contact;
  return (
    <Item>
      <p>
        {name}:<span>{number}</span>
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </Item>
  );
}

ContactsItem.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
