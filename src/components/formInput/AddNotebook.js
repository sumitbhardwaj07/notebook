import { useState } from "react";
import Modal from "../UI/Modal"



const AddNotebook = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDesc, setEnteredDesc] = useState("");

    const addNoteHandler = (event)=>{
        event.preventDefault();
        if(enteredTitle.trim().length === 0 || enteredDesc.trim().length === 0){
            alert("Plese fill all the fields");
            return
        }
        props.onAddNote(enteredTitle,enteredDesc);
        props.onClose();
        setEnteredTitle("");
        setEnteredDesc("");
    };

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const descChangeHandler = (event) => {
        setEnteredDesc(event.target.value);
    };


    return (
        <Modal onClose={props.onClose}>
            <h3>Add New Note</h3>
            <form onSubmit={addNoteHandler}>
                <label htmlFor="title">Note Title:</label>
                <input id="title" type="text" value={enteredTitle} onChange={titleChangeHandler}/><br />
                <label htmlFor="desc" >Note Desc.</label><br />
                <textarea id="desc" type="text" value={enteredDesc} onChange={descChangeHandler}/><br />
                <button type="submit">Add</button>
                <button onClick={props.onClose}>Close</button>
            </form>
        </Modal>
    )
};

export default AddNotebook;