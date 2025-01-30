import styles from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDeleteContact }) => (
  <li className={styles.item}>
    <p>
      {name}: {number}
    </p>
    <button className={styles.button} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default Contact;
