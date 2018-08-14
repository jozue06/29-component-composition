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

        return <ShowUpdateForm ident="show update form compo" save={this.props.save} notes={this.props.notes} content={this.props.content} />
        return <ShowUpdateForm 
        ident="show update form compo" 
        save={this.props.save} 
        id={this.props.id} 
        notes={this.props.notes} 
        content={this.props.content} />

    }


    render() {


        if (this.props.updatingNote) {
            console.log('inside update note propssssssss', this.state.notes.id);
            return this.showUpdateNote();
        }
        return <div>
            <h4></h4>
        </div>
    }
}

export default NoteUpdateForm;
