import { useState } from "react";
import "./App.css";

function App() {
  const handleSubmitForm = (evt) => {
    console.log(evt);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="username">Name</label>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
