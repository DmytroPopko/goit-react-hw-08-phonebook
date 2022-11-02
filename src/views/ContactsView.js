import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import Filter from '../components/Filter';
import IconButton from '../components/IconButton';
import Modal from '../components/Modal';
import { selectContacts } from '../redux/selectors';
import { addContact, deleteContact, fetchContacts } from '../redux/operations';
import { setFilter } from '../redux/contactSlice';
import { ReactComponent as AddIcon } from '../icons/add.svg';

export default function ConcactsView(params) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { filterTerm, contacts, isLoading, error } =
    useSelector(selectContacts);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onAddContact = opt => {
    const newContact = {
      id: nanoid(),
      name: opt.name,
      phone: opt.number,
    };

    const hasContact = contacts.find(option => option.name === newContact.name);
    if (hasContact === undefined) {
      dispatch(addContact(newContact));
    } else {
      alert(`${newContact.name} is already in contacts?`);
    }

    toggleModal();
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getVisibleConcats = () => {
    const normalizedFilter = filterTerm.toLowerCase();

    return normalizedFilter
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(normalizedFilter);
        })
      : contacts;
  };

  const visibleContacts = getVisibleConcats();

  return (
    <Container>
      <SectionTitle title={'Phonebook'}></SectionTitle>
      <IconButton onClick={toggleModal} aria-label="Add contact">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={onAddContact}></ContactForm>
        </Modal>
      )}
      <SectionTitle title={'Contacts'}></SectionTitle>
      <Filter value={filterTerm} onChange={changeFilter} />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts !== undefined ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        ''
      )}
    </Container>
  );
}
