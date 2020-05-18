import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title : "",
            // content : "",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    makeCard() {
        return(
            <Card>
                 <CardContent>
                     <p>document.getElementById('noteTitle').value</p>
                     <p>document.getElementById('noteContent').value</p>
                </CardContent>
             </Card>
        )
    }

    handleClick() {
        // const c = {
        //     title: document.getElementById('noteTitle').value,
        //     content: document.getElementById('noteContent').value,
        // }
        super.addNote(this.makeCard())
        console.log("done")
    }

    render() {
        return(
            <form>
                <input
                    id= "noteTitle"
                    type = "text"
                    onChange={e => this.setState({ title: e.target.value })}
                />
                <textarea 
                    id = "noteContent"
                    onChange = {e => this.setState({ content: e.target.value })}
                />
                <button onClick={this.handleClick}>
                    Save Note
                </button>
            </form>
        )


        // return(
            // <Card className={classes.root}>
            //     <CardContent>
            //         <input type="text" value="Title" name="noteTitle"/>
            //         <textarea value="New Note" name="noteContent"/>
            //     </CardContent>
            //     <CardActions>
            //         <button onClick={this.clickHandle}>
            //             Save Note 
            //         </button>
            //     </CardActions>
            // </Card>
        // )
    }
}

export default NewNote;