import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'moment';
import './Note.css'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            content: this.props.note.content,
            description: this.props.note.description,
            isEditing: false
        }
    }

    changeCard = () => {
        const c = {
            title: this.state.title,
            content: this.state.content,
            description: this.state.description,
            time: Moment().calendar()
        }
        this.props.editNote(c, this.props.index)
        this.setState({ isEditing: false })
    }

    render() {
        return (
            <div className="Note">
                <Card>
                    <CardContent id="card">
                        {(this.state.isEditing) ?
                            <div>
                                <div className="labels">
                                    <input className="title" type="text" onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
                                    <input className="description" type="text" onChange={e => this.setState({ description: e.target.value })} value={this.state.description} />
                                    <textarea className="content" onChange={e => this.setState({ content: e.target.value })} value={this.state.content} />
                                </div>
                                <p> {this.props.note.time} </p>
                                <button onClick={this.changeCard}>Save Edits</button>
                                <button onClick={() => this.props.removeNote(this.props.note)}>Delete Note</button>
                            </div>
                            :
                            <div>
                                <p>Title: {this.state.title}</p>
                                <p>Description: {this.state.description}</p>
                                <p>Note: {this.state.content}</p>
                                <button className="button" onClick={() => this.setState({ isEditing: true })}>
                                    Edit Note
                                </button>
                                <button onClick={() => this.props.removeNote(this.props.note)}>Delete Note</button>
                            </div>
                        }
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Note;