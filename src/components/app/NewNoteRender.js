import React from 'react';

import NoteItem from '../note-list/note-item/index.js'
import UpdateNote from '../note-update/index.js';
import { connect } from 'react-redux';

class NewNoteRender extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log('the stae', this.props)
        return (
            <ul>
                {this.props.notes.map(
                    (note) => (
                        <div key={note.id}>
                            <NoteItem
                                key={note.id}
                                id={note.id}
                                note={note}
                                deleteNote={this.deleteNote}
                                ident="note item compo"
                                updateNote={this.updateNote} />
                            <UpdateNote
                                key={this.props.id}
                                ident="update note compo"
                                notes={this.props.notes}
                                id={this.props.currId} updatingNote={this.props.updatingNote}
                                save={this.save} />
                        </div>
                    )
                )}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    notes: state,
});



export default connect(mapStateToProps)(NewNoteRender);

