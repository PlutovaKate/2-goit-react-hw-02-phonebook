import { ContactInform, ListItem, ContactBtn } from './ContactItem.styled';
const ContactItem = ({ name, id, number, onDelete }) => {
  return (
    <ListItem id={id}>
      <ContactInform>
        <p>{name}:</p>
        <p>{number}</p>
      </ContactInform>
      <ContactBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactBtn>
    </ListItem>
  );
};

export default ContactItem;
