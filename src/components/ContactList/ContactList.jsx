import Conact from '../Contact';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';

function ContactList({ contacts, fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <Conact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(operations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
