import React, { Component } from 'react';
import './App.css';
import NewNote from "./NewNote.js";
import NoteList from "./NoteList.js";
import firebase from './firebase.js';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      notes: [],
      database: firebase.database().ref("notes"),
    }
  }

  componentDidMount = () => {
    this.state.database.once("value", snapshot => {
      if (snapshot && snapshot.exists()) {
        let notes = snapshot.val();
        this.setState({ notes: notes })
      }
    })
  }

  addNote = note => {
    this.setState(prevState => {
      return { notes: [...prevState.notes, note] };
    })
    this.state.database.set(this.state.notes);
  }

  removeNote = note => {
    const updatedNotes = this.state.notes.filter(
      curnote => curnote.index !== note.index
    );
    console.log(updatedNotes)   // remove console.log when done
    this.setState(prevState => {
      return ({ notes: updatedNotes });
    })
    this.state.database.child(note.index).remove();
  }

  editNote = (thisNote, index) => {
    var newNotes = [...this.state.notes]
    newNotes[index] = thisNote;
    this.setState ({notes : newNotes}) ;
  }

  render() {
    return (
      <div className="App">
        <h1>Create a New Note: </h1>
        <NewNote addNote = {this.addNote} />
        <h1>Your Current Notes: </h1>
        <NoteList 
          notes = {this.state.notes}
          removeNote = {this.removeNote}
          editNote = {this.editNote}
        />
      </div>
    )
  }
}

export default App;
