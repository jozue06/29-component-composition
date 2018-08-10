import React from 'react';

import ShowUpdateForm from '../note-update/showUpdateForm.js';

class NoteUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note,
        }
        this.showUpdateNote = this.showUpdateNote.bind(this);
    }

    showUpdateNote() {
        console.log('inside showupdate ', this.props);
        return <ShowUpdateForm save={this.props.save} note={this.props.note} content={this.props.content} />
    }   


    render() {
        console.log('inside update note state', this.state);
        if (this.props.updatingNote) {
            console.log('inside update');
            return this.showUpdateNote();

        }
        return <div>
            <h4>click the E to edit your note</h4>
        </div>
    }
}

export default NoteUpdateForm;