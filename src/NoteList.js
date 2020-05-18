import React, { Component } from "react";
import Note from './Note.js'

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props.notes)
        var list = this.props.notes.map((note,index) => {
            return(
                //<li key={note.key}>
                    <Note index={index} note={note} editNote={this.props.editNote} removeNote={this.props.removeNote}> </Note>
                //</li>
            )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default NoteList;