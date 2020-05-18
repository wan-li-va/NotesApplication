import React, { Component } from "react";

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            this.props.notes.map(note => {
                return(
                    <div>
                        <div>{note.title}</div>
                        <div>{note.content}</div>
                    </div>
                )
            })
        )
    }
}

export default NoteList;