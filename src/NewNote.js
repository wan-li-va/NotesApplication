import React from 'react';
import Moment from 'moment';
import './NewNote.css'

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Title",
            description: "Description",
            content: "Note"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    /*
    Use arrow functions to avoid doing bind this from above.
    handleClick = () => {return ();}
    */
    handleClick() {
        const c = {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content,
            time: Moment().calendar(),
            key: Date.now()
        }
        this.props.addNote(c)
        this.setState({ title : "Title", content : "Note", description : "Description" })
    }

    render() {
        return(
            <div className="NewNote">
                <div className="heading">
                    <input
                        className="title"
                        id= "noteTitle"
                        type = "text"
                        value = {this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                    <input
                        className="description"
                        id= "noteInput"
                        type= "text"
                        value= {this.state.description}
                        onChange={e => this.setState({ description: e.target.value })}
                    />
                </div>
                <textarea 
                    className="content"
                    id = "noteContent"
                    value = {this.state.content}
                    onChange = {e => this.setState({ content: e.target.value })}
                />
                <button className="button" onClick={this.handleClick}>
                    Save Note
                </button>
            </div>
        )

    }
}

export default NewNote;
