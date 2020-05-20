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

  //Don't love the name "thisNote". "note" works instead.
  addNote = thisNote => {
    this.setState(prevState => {
      return { notes: [...prevState.notes, thisNote] };
    })
  }

  /*
  Not a huge fan of using index. I would prefer to pass in a note object as your argument
  and then filter on a key or unique value. 
  */
  removeNote = index => {
    const updatedNotes = this.state.notes.filter(
      (note, ind) => ind !== index
    );
    //Never leave console.logs or extraneous comments in your final product
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
//Good use of parent / child components here.
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
