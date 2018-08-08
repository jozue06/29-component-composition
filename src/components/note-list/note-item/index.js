import React from 'react';
import Style from '../../style/styles.js'

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };
    this.deleteNote = this.deleteNote.bind(this);
  }


    deleteNote(e) {
      console.log('this state?', this.props.id);
      e.preventDefault();
      this.props.deleteNote(this.props.id);
    }

  render() {

    console.log('#2 render the note item', this.props.note);

    return (
    <Style.Title>
      <li className="note">
      <Style.Text>Note Title: {this.props.note.noteName}</Style.Text>
      <h4>Note Content: <Style.Text> {this.props.note.content}</Style.Text></h4>
      
      <Style.Button onClick={this.deleteNote}>x</Style.Button>
    </li>
    </Style.Title>
    )
  }
}