import { useDispatch } from "react-redux";

import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
