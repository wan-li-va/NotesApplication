import React, { Component } from 'react';
import './App.css';
import NewNote from "./NewNote.js";
import NoteList from "./NoteList.js";


class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      notes: []
    }
  }

  addNote = thisNote => {
    this.setState(prevState => {
      return { notes: [...prevState.notes, thisNote] };
    })
  }

  removeNote = index => {
    const updatedNotes = this.state.notes.filter(
      (note, ind) => ind !== index
    );
    console.log(updatedNotes)
    this.setState(prevState => {
      return { notes: updatedNotes };
    })
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
