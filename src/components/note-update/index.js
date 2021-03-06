import React from 'react';

import ShowUpdateForm from '../note-update/showUpdateForm.js';

class NoteUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes,
        }
        this.showUpdateNote = this.showUpdateNote.bind(this);
    }

    showUpdateNote() {
        console.log('inside showupdate ', this.props);
        return <ShowUpdateForm 
        ident="show update form compo" 
        save={this.props.save} 
        id={this.props.id} 
        notes={this.props.notes} 
        content={this.props.content} />
    }


    render() {
        console.log('inside update note state', this.props);
        if (this.props.updatingNote) {
            return this.showUpdateNote();
        }
        return <div>
            <h4></h4>
        </div>
    }
}

export default NoteUpdateForm;