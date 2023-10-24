import ContactItem from 'components/ContactItem/ContactItem';

import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} />;
      })}
    </List>
  );
};

export default ContactList;
