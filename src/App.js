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

  // componentDidMount = () => {
  //   this.state.database.once("value", snapshot => {
  //     if (snapshot && snapshot.exists()) {
  //       let notes = Array.from(snapshot.val());
  //       this.setState({ notes: notes })
  //     }
  //   })
  // }

  addNote = note => {
    var newNotes = [...this.state.notes, note];
    this.setState(prevState => {
      return { notes: newNotes }
    })
    this.state.database.set(newNotes);
  }

  removeNote = note => {
    const updatedNotes = this.state.notes.filter(
      curnote => curnote.key !== note.key
    );
    console.log(updatedNotes)   // remove console.log when done
    console.log(this.state.notes)
    this.setState(prevState => {
      return ({ notes: updatedNotes });
    })
    this.state.database.child(note.index).remove();
  }

  editNote = (thisNote, index) => {
    var newNotes = [...this.state.notes]
    newNotes[index] = thisNote;
    this.setState ({notes : newNotes});
    this.state.database.set(newNotes);
  }

  render() {
    return (
      <div className="App">
        <h1>Create a New Note: </h1>
        <NewNote addNote = {this.addNote} notes={this.state.notes}/>
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
