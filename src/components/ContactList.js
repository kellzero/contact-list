import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact, editContact } from "../redux/contactsSlice";
import {
  ListContainer,
  ContactItem,
  ContactDetails,
  ActionButton,
  EditInput,
} from "../styles/contactlist.style";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedContact, setEditedContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEditClick = (contact) => {
    setEditingId(contact.id);
    setEditedContact(contact);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    dispatch(editContact(editedContact));
    setEditingId(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  return (
    <ListContainer>
      {contacts.map((contact) =>
        editingId === contact.id ? (
          <ContactItem key={contact.id}>
            <div>
              <EditInput
                type="text"
                name="name"
                value={editedContact.name}
                onChange={handleEditChange}
              />
              <EditInput
                type="email"
                name="email"
                value={editedContact.email}
                onChange={handleEditChange}
              />
              <EditInput
                type="tel"
                name="phone"
                value={editedContact.phone}
                onChange={handleEditChange}
              />
            </div>
            <div>
              <ActionButton onClick={handleSaveClick}>Salvar</ActionButton>
              <ActionButton onClick={handleCancelClick}>Cancelar</ActionButton>
            </div>
          </ContactItem>
        ) : (
          <ContactItem key={contact.id}>
            <ContactDetails>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </ContactDetails>
            <div>
              <ActionButton onClick={() => handleEditClick(contact)}>
                Editar
              </ActionButton>
              <ActionButton
                danger
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Remover
              </ActionButton>
            </div>
          </ContactItem>
        )
      )}
    </ListContainer>
  );
};

export default ContactList;
