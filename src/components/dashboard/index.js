import React from 'react';

import Header from '../app/header.js';
import Footer from '../app/footer.js';
import Style from '../style/styles.js';
import NoteForm from '../note-create-form/index.js';
import NoteItem from '../note-list/note-item/index.js';
import UpdateNote from '../note-update/index.js'



class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      updatingNote: false,
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  hydrateStateWithLocalStorage() {
    let hydrateState = JSON.parse(localStorage.note)
    this.setState(
      { notes: [...hydrateState] });

  }

  componentDidMount() {
    if (localStorage.note)
      this.hydrateStateWithLocalStorage();
  }


  addNote = (note) => {
    let notes = [...this.state.notes]
    notes.push(note);
    this.setState({ notes: notes });

    let storageToSet = JSON.stringify(notes)
    localStorage.setItem('note', storageToSet)
  }

  deleteNote = id => {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });

    let storageToSet = JSON.stringify(notes)
    localStorage.setItem('note', storageToSet)
  }

  updateNote = id => {
    this.setState({ updatingNote: true });
  }

  save = noteN => {
  
    let notes = this.state.notes.map(e => {
      if (e.id === noteN.notes[0].id) {
        e.updatingNote = false;
        e.content = noteN.content;
      }
      this.setState({updatingNote:false})
      return e;
    });
    
    this.setState({ notes })
    let storageToSet = JSON.stringify(notes)
    localStorage.setItem('note', storageToSet)
  }

  render() {

    return (
      <div>
        <Header />
        <Style.Wrapper>
          <NoteForm ident="note form compo" addNote={this.addNote} />
          {
            this.state.notes.map(
              (note) => <NoteItem key={note.id} id={note.id} note={note} deleteNote={this.deleteNote} ident="note item compo" updateNote={this.updateNote} />
            )
          }
          <UpdateNote key={this.state.id} ident="update note compo" notes={this.state.notes} updatingNote={this.state.updatingNote} save={this.save} />
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default Dashboard;