import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'moment';
import './Note.css'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.note.title,
            content : this.props.note.content,
            description : this.props.note.description
        }
        this.changeCard = this.changeCard.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    changeCard() {
        const c = {
            title: this.state.title,
            content: this.state.content,
            description: this.state.description,
            time: Moment().calendar()
        }
        this.props.editNote(c, this.props.index)
    }

    removeNote() {
        this.props.removeNote(this.props.index)
    }

    render() {
        return(
            <div className="Note">
                <Card>
                    <CardContent id="card">
                        <div className="labels">
                            <input className="title" type="text" onChange={e => this.setState({ title : e.target.value})} value = {this.state.title}/>
                            <input className="description" type="text" onChange={e => this.setState({ description : e.target.value})} value = {this.state.description}/>
                            <textarea className="content" onChange= {e => this.setState({ content : e.target.value })} value= {this.state.content} />
                        </div>
                        <p> {this.props.note.time} </p>
                        <button onClick={this.changeCard}>Save Edits</button>
                        <button onClick={this.removeNote}>Delete Note</button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
                    
export default Note;