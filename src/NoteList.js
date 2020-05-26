import React, { Component } from "react";
import Note from './Note.js'

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var list = this.props.notes.map((note, index) => {
            return (
                <Note
                    index={index} note={note} editNote={this.props.editNote} removeNote={this.props.removeNote}
                    notes={this.props.notes}>
                </Note>
            )
        })
        return (
            <div className="NoteList">
                {list}
            </div>
        )
    }
}

export default NoteList;