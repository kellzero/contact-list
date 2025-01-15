import React from "react";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddcontactForm";
import { AppContainer } from "./styles/appStyles";

const App = () => (
  <AppContainer>
    <h1>Lista de Contatos</h1>
    <AddContactForm />
    <ContactList />
  </AppContainer>
);

export default App;
