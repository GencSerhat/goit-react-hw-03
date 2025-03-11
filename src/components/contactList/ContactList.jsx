import React from "react";
import Contact from "./contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;
