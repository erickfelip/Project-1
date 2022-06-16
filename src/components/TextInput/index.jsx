import "./styles.css";

export const TextInput = ({searchValues, handleChange}) => {
  return (
    <div className="search-container">
      <input
        onChange={handleChange}
        value={searchValues}
        type="search"
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};
