import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
