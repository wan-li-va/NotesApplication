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

  removeNote = thisNote => {
    const updatedNotes = this.state.notes.filter(
      note => note.title !== thisNote.title
    );
    this.setState(prevState => {
      return { notes: updatedNotes };
    })
  }

  render() {
    return (
      <div className="App">
        <NewNote addNote = {this.addNote} />
        <NoteList 
          notes = {this.state.notes}
          removeNote = {this.removeNote}
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
