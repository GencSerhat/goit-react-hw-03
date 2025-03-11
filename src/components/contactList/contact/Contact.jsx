import React from "react";
import styles from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contactInfo}>
        <span className={styles.icon}>
          <FaUser />
        </span>
        <h3>{name}</h3>
        <span className={styles.icon}>
          <FaPhoneAlt />
        </span>
        <p>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
