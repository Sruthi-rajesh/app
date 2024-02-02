import React, { useState } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom"; 
import ChatBot from "./components/bot.js";

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const add = (e) => {
    e.preventDefault();
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <div className="main">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>email</label>
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}

function ContactCard(props) {
  const { name, email } = props.contact;
  return (
    <div className="content">
      {name}
      {email}
    </div>
  );
}

function ContactList(props) {
 
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return <div>{renderContactList}</div>;
}


function NavigationBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/" end className="nav-link" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/contacts" className="nav-link" activeClassName="active-link">
        Contacts
      </NavLink>
      <NavLink to="/chatbot" className="nav-link" activeClassName="active-link">
        ChatBot
      </NavLink>
    </div>
  );
}

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  return (
    <div className="app">
      <HashRouter>
        <NavigationBar /> 
        <Routes>
          <Route path="/" element={<h2>Welcome to App</h2>} /> 
          <Route
  path="/contacts"
  element={
   
    <div>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  }
/>
          <Route path="/chatbot" element={<ChatBot />} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
