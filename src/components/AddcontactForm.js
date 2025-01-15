import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { Form, Input, Button } from "../styles/contactFormStyle";

const AddContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default AddContactForm;
