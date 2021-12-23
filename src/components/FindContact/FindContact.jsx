import { Container } from './FindContact.styled';
import propTypes from 'prop-types';

export default function FindContact({ filter, handleContactInput }) {
  return (
    <Container>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleContactInput}
      />
    </Container>
  );
}

FindContact.propTypes = {
  filter: propTypes.string.isRequired,
  handleContactInput: propTypes.func.isRequired,
};
