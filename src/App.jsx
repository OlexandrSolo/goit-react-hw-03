import { useId, useState } from "react";
import "./App.css";

const initialValue = {
  username: "",
  numberPhone: "",
};

function App() {
  const id = useId();
  const [userDate, setUserDate] = useState(initialValue);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    console.log(userDate);
    setUserDate(initialValue);
  };
  const handleChange = (evt) => {
    setUserDate({
      ...userDate,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="username">
          <label htmlFor={`${id}-'userName'`}>Name</label>
          <input
            type="text"
            value={userDate.username}
            onChange={handleChange}
            name="username"
            id={`${id}-'userName'`}
          />
        </div>
        <div className="numberPhone">
          <label htmlFor={`${id}-'numberPhone'`}>Number</label>
          <input
            type="text"
            value={userDate.numberPhone}
            onChange={handleChange}
            name="numberPhone"
            id={`${id}-'numberPhone'`}
          />
        </div>

        <button type="submit">Add contact</button>
      </form>

      <div className="wrapper">
        <label htmlFor={`${id}-'searchContact'`}>Find contacts by name</label>
        <input type="text" name="searchContact" id={`${id}-'searchContact'`} />
      </div>

      <div>
        <ul>
          <li>
            <span></span>
            <span></span>
            <button></button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
