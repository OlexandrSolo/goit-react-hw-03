import { nanoid } from "nanoid";
import { useId } from "react";
import PropTypes from "prop-types";
import { Form, Field, Formik } from "formik";

export default function ContactForm({ updateContactList }) {
  const idLabel = useId();

  const handleSubmitForm = (values, actions) => {
    const id = nanoid();

    updateContactList({
      id,
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmitForm}
      initialValues={{
        name: "",
        number: "",
      }}
    >
      <Form>
        <div className="group">
          <label htmlFor={`${idLabel}-'name'`}>Name</label>
          <Field type="text" name="name" id={`${idLabel}-'name'`} />
        </div>
        <div className="group">
          <label htmlFor={`${idLabel}-'number'`}>Number</label>
          <Field type="number" name="number" id={`${idLabel}-'number'`} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  updateContactList: PropTypes.func.isRequired,
};
