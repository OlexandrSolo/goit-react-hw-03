import { useId, useState } from "react";

import "./App.css";
import ContactForm from "./component/ContactForm/ContactForm";
import ContactList from "./component/ContactList/ContactList";

import initialContactList from "./contactList.json";

const initialValue = {
  id: "",
  name: "",
  number: "",
};

function App() {
  const [userDate, setUserDate] = useState(initialValue);
  const [contactList, setContactList] = useState(initialContactList);

  const id = useId();

  const addNewUser = (newUser) => {
    setContactList((prevState) => [...prevState, newUser]);
  };
  return (
    <>
      <ContactForm updateContactList={addNewUser} />

      <div className="wrapper">
        <label htmlFor={`${id}-'searchContact'`}>Find contacts by name</label>
        <input type="text" name="searchContact" id={`${id}-'searchContact'`} />
      </div>
      <ContactList userList={contactList} />
    </>
  );
}

export default App;
