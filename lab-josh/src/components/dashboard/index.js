import React from 'react';

import Header from '../app/header.js';
import Footer from '../app/footer.js';
import Style from '../style/styles.js';
import NoteForm from '../note-create-form/index.js';
import NoteItem from '../note-list/note-item/index.js';



class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  hydrateStateWithLocalStorage() {
    if ( localStorage.length > 1){
      console.log('local storage hidrateee',localStorage)
    let hydrateState = JSON.parse(localStorage.note)
    this.setState({ notes: [...hydrateState] });
    }
    }
  
  componentDidMount() {
    console.log('mlkjasdfteeeee')
    this.hydrateStateWithLocalStorage();
 }   


  addNote = (note) => {
    let notes = [...this.state.notes]
    notes.push(note);
    this.setState({ notes: notes });
    console.log('state on add ', this.state.notes);
    let storageToSet = JSON.stringify(notes)
    localStorage.setItem('note', storageToSet)
  }

  deleteNote = id => {

    const notes = this.state.notes.filter(note => note.id !==id);
  
    this.setState( { notes } );

    let storageToSet = JSON.stringify(notes)
    localStorage.setItem('note', storageToSet)
  }

  render() {

    return (
      <div>
        
        <Style.Wrapper>
          <NoteForm addNote={this.addNote} />
          {this.state.notes.map((note) => <NoteItem key={note.id} id={note.id} note={note} deleteNote={this.deleteNote} />)
        }
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default Dashboard;