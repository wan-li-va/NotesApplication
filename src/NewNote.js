import React from 'react';
import Moment from 'moment';
import './NewNote.css'

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            content: "",
        };
    }

    handleClick = () => {
        if (this.state.title !== "" || this.state.content !== "") {
            const c = {
                title: this.state.title,
                description: this.state.description,
                content: this.state.content,
                time: Moment().calendar(),
                key: Date.now(),
                index: this.props.notes.length,
            }
            this.props.addNote(c)
            this.setState({ title: "", content: "", description: "" })
        }
    }

    render() {
        return (
            <div className="NewNote">
                <div className="heading">
                    <label>Title: </label>
                    <input
                        className="title"
                        id="noteTitle"
                        type="text"
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                    <label className="descriptionHeader">Description: </label>
                    <input
                        className="description"
                        id="noteInput"
                        type="text"
                        value={this.state.description}
                        onChange={e => this.setState({ description: e.target.value })}
                    />
                </div>
                <label className="noteHeader">Note: </label>
                <textarea
                    className="content"
                    id="noteContent"
                    value={this.state.content}
                    onChange={e => this.setState({ content: e.target.value })}
                />
                <button className="button" onClick={this.handleClick}>
                    Save Note
                </button>
            </div>
        )

    }
}

export default NewNote;