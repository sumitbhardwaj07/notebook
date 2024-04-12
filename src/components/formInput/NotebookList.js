const NotebookList = (props) => {
  const deleteNote = (id) => {
    props.onDelete(id);
  };

  const filteredNotebooks = props.searchQuery
    ? props.notes.filter((note) =>
        note.title.toLowerCase().includes(props.searchQuery.toLowerCase())
      )
    : props.notes;

  return (
    <ul>
      {filteredNotebooks.map((note) => (
        <div>
          <li key={note.id}>
            <h4 style={{ marginTop: "0" }}>{note.title}</h4>
            <p style={{ marginBottom: "1px" }}>{note.desc}</p>
            <button
              style={{ marginBottom: "40px" }}
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default NotebookList;
