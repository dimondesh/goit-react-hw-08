import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import styles from "../../src/App.module.css";

const Phonebook = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};
export default Phonebook;
