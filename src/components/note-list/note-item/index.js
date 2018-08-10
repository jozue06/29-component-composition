import React from 'react';
import Style from '../../style/styles.js'

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
    };
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

  }


  deleteNote(e) {
    console.log('this state?', this.props.id);
    e.preventDefault();
    this.props.deleteNote(this.props.id);
  }

  updateNote(e) {
    console.log('this in update state?', this.state);
    e.preventDefault();
    this.props.updateNote(this.props.id);
  }


  render() {

    console.log('#2 render the note item', this.props.note);

    return (
      <Style.Text>
        <li className="note">
          <Style.Text>Note Title: {this.props.note.noteName}</Style.Text>
          <h4>Note Content: <Style.Title> {this.props.note.content}</Style.Title></h4>

          <Style.Button onClick={this.deleteNote}>x</Style.Button>
          <Style.Button onClick={this.updateNote}>E</Style.Button>

        </li>
      </Style.Text>
    )
  }
}