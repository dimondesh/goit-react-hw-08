import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import styles from "../../src/App.module.css";

const Phonebook = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap w-2/3 md:w-1/4">
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </div>
  );
};
export default Phonebook;
