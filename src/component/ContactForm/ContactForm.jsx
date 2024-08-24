import { nanoid } from "nanoid";
import { useId } from "react";

export default function ContactForm({ updateContactList }) {
  const idLabel = useId;
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const id = nanoid();
    updateContactList({
      id,
      name: evt.target.name.value,
      number: evt.target.number.value,
    });

    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="userName">
        <label htmlFor={`${idLabel}-'name'`}>Name</label>
        <input
          type="text"
          // value={userDate.username}
          // onChange={handleChange}
          name="name"
          id={`${idLabel}-'name'`}
        />
      </div>
      <div className="number">
        <label htmlFor={`${idLabel}-'number'`}>Number</label>
        <input
          type="text"
          // value={userDate.numberPhone}
          // onChange={handleChange}
          name="number"
          id={`${idLabel}-'number'`}
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}
