import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchbox}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
