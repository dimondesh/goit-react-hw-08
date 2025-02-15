import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <h1>
        Welcome to PhoneBook – Your Ultimate Digital Phonebook Stay connected
        effortlessly with PhoneBook, the modern way to manage and access contact
        information. Whether you're looking for a friend's number, a business
        contact, or need to organize your own contacts, we make it quick and
        easy.
      </h1>
      <Link
        className="bg-blue-500 rounded-md p-3 text-white hover:bg-blue-600 transition-all duration-200 px-2 py-2 max-w-50 "
        to="/phonebook"
      >
        Get Started
      </Link>
    </div>
  );
};
export default Home;
