import React from 'react';
import ReactDOM from 'react-dom'

import Header from './components/app/header.js';
import Footer from './components/app/footer.js';
import Style from './components/style/styles.js';
import NoteForm from './components/note-create-form/index.js';
import NoteItem from './components//note-list/note-item/index.js';
import UpdateNote from './components/note-update/index.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currId: '',
      notes: [],
      updatingNote: false,
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  hydrateStateWithLocalStorage() {
    console.log('local storage hidrateee', localStorage)
    let hydrateState = JSON.parse(localStorage.note)
    this.setState(
      { notes: [...hydrateState] },
      () => console.log('mlkjasdfteeeee', this.state)
    );

  }

  componentDidMount() {
    if (localStorage.note)
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
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });

    let storageToSet = JSON.stringify(notes)
    localStorage.setItem('note', storageToSet)
  }

  updateNote = id => {
    console.log('props in updation ', this.props);

    this.setState({
      updatingNote: true,
      currId: id
    });
  }

  save = (id, content) => {
    console.log('note id ', id);

    console.log('note content', content);

    console.log('state in save ', this.state);
    console.log('props in save ', this.props);

    let notes = this.state.notes.map(e => {
      console.log('element . id =', e.id, 'note . id =', id)
      if (e.id === id) {
        e.updatingNote = false;
        e.content = content;
      }
      this.setState({ updatingNote: false })
      return e;
    });

    this.setState({ notes }, () =>
      console.log('note to update?>> ', this.state.notes)
    )


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
              (note) =>
                <div>
                  <NoteItem
                    key={note.id}
                    id={note.id}
                    note={note}
                    deleteNote={this.deleteNote}
                    ident="note item compo"
                    updateNote={this.updateNote} />
                  <UpdateNote
                    key={this.state.id}
                    ident="update note compo"
                    notes={this.state.notes}
                    id={this.state.currId} updatingNote={this.state.updatingNote}
                    save={this.save} />
                </div>
            )
          }
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);

export default App;