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
            <h4>dide oyu</h4>
            <p>dbl clk</p>
        </div>
    }
}

export default NoteUpdateForm;