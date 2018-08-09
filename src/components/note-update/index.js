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
        console.log('inside showupdate ');
        return <ShowUpdateForm {...this.props} />
    }


    render() {
        console.log('inside update note prps', this.state);
        if (this.props.updatingNote) {
            console.log('inside update');
            return this.showUpdateNote();

        }
        return <div>
            <h4>please enter a note</h4>
        </div>
    }
}

export default NoteUpdateForm;