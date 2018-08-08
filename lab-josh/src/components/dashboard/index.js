import React from 'react';

import Header from '../app/header.js';
import Footer from '../app/footer.js';
import Style from '../style/styles.js';
import NoteForm from '../note-create-form/index.js';
import NoteItem from '../note-list/note-item/index.js';



class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  hydrateStateWithLocalStorage() {
    if ( localStorage.length > 1){
      console.log(localStorage)
    let hydrateState = JSON.parse(localStorage.note)
    this.setState({ notes: [...hydrateState] });
    }
    }
  
  componentDidMount() {
    console.log('mlkjasdfteeeee')
    this.hydrateStateWithLocalStorage();
 }   


  addNote(note) {
    this.state.notes.push(note);
    this.setState({ notes: [...this.state.notes] });

    let storageToSet = JSON.stringify(this.state.notes)
    localStorage.setItem('note', storageToSet)
  }

  deleteNote(id) {
    const deletedNote = this.state.notes.find(note => {
      return note.id = id; });
    const noteIndex = this.state.notes.indexOf(deletedNote);
    this.state.notes.splice(noteIndex, 1);
    this.setState({ notes: [...this.state.notes] });
    let storageToSet = JSON.stringify(this.state.notes)
    localStorage.setItem('note', storageToSet)
  }

  render() {

    return (
      <div>
      
        <Style.Wrapper>
          <NoteForm addNote={this.addNote} />
          {this.state.notes.map((note) => <NoteItem id={note.id} note={note} deleteNote={this.deleteNote} />)
        }
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default Dashboard;