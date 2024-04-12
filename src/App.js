import logo from './logo.svg';
import './App.css';
import AddNotebook from './components/formInput/AddNotebook';
import FormInput from './components/formInput/FormInput';
import { useState } from 'react';
import NotebookList from './components/formInput/NotebookList';

function App() {
  const [notesList, setNotesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const showFormHandler = () =>{
    setIsShown(true);
  };
  const hideFormHandler = ()=>{
    setIsShown(false);
  };
  const addNoteHandler = (uTitle, uDesc) =>{
    setNotesList((prevList) => {
      return [
        ...prevList,
        {title: uTitle, desc: uDesc, id: Math.random().toString() },
      ];
    });
  };
  const deleteNoteHandler = (noteId) =>{
    setNotesList((prevList) =>{
      return prevList.filter((note)=> note.id !== noteId)
    })
  }

  const handleSearch = (query) => {
    if (query.trim() === ""){
      setFilteredList(notesList);
    } else {
      setFilteredList(
        notesList.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))
      )
    };
  };
  return (
    <div>
      
      {isShown && <AddNotebook onAddNote={addNoteHandler} onClose={hideFormHandler} onAdd={showFormHandler} />}
      <FormInput onAdd={showFormHandler} showingNotes={filteredList.length > 0 ? filteredList.length : notesList.length} onSearch={handleSearch} totalNotes={notesList.length} />
      <NotebookList notes={filteredList.length > 0 ? filteredList : notesList} onDelete={deleteNoteHandler} />
    </div>
  );
}

export default App;
