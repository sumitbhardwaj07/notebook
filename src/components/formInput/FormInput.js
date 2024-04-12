import { useState } from "react";

const FormInput = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    props.onAdd();
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    props.onSearch(event.target.value);
  };

  return (
    <form style={{ textAlign: "center" }}>
      <div className="center-text">
        <h1>NoteBook</h1>
        <label htmlFor="search">Search Notes:</label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <p>Total Notes:{props.totalNotes}</p>
        <p>Showing:{props.showingNotes}</p>
        <button onClick={handleAddUser}>Add New Note</button>
      </div>
    </form>
  );
};

export default FormInput;
