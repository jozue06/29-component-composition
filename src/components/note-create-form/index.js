import React from 'react';
import uuidv4 from 'uuid/v4';
import Style from '../style/styles.js'

import { connect } from 'react-redux';
import { addNote } from '../../actions/note-actions.js';

 class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteName: '',
      content: '',
      id: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const change = e.target.value;
    this.setState({ [e.target.name]: change, id: uuidv4() });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
 
    this.setState({
      noteName:'',
      content:''
    })
  }


  render() {
    return <form id="form" onSubmit={this.handleSubmit}>
     <Style.Text> <input type="text" name="noteName" placeholder="Note Title" value={this.state.noteName} onChange={this.handleChange} /></Style.Text> 
     <Style.Text>  <textarea type="field" name="content" placeholder="text" value={this.state.content} onChange={this.handleChange} /></Style.Text> 
      <Style.Button type="submit" value="Add">Add Note</Style.Button>
    </form>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNote: note => dispatch(addNote(note))
});

export default connect(null, mapDispatchToProps)(NoteForm);