import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(10, "Phone number must be at least 10 characters")
      .max(15, "Phone number must be less than 15 characters")
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="number">Phone Number</label>
            <Field
              type="text"
              id="number"
              name="number"
              placeholder="Enter phone number"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
