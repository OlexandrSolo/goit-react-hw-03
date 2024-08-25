import { useId } from "react";
import PropTypes from "prop-types";

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div className="wrapper">
      <label htmlFor={`${id}-'searchContact'`}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        name="searchContact"
        id={`${id}-'searchContact'`}
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
