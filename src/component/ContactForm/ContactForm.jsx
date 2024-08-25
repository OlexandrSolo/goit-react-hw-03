import { nanoid } from "nanoid";
import { useId } from "react";
import PropTypes from "prop-types";

export default function ContactForm({ updateContactList }) {
  const idLabel = useId();
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
        <input type="text" name="name" id={`${idLabel}-'name'`} />
      </div>
      <div className="number">
        <label htmlFor={`${idLabel}-'number'`}>Number</label>
        <input type="text" name="number" id={`${idLabel}-'number'`} />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  updateContactList: PropTypes.func.isRequired,
};
