import React from 'react';


class ShowUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note,
        }
        this.onUpdate = this.onUpdate.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    onUpdate(event) {
        let newState = Object.assign(this.props.noteName);
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    save(event) {
        event.preventDefault();
        this.props.updatingNote(this.state);
    }

    cancel() {
        this.props.updatingNote({});
    }

    render(){
        console.log('this.props', this.props.notes)
        return(
            <div>
            <h1>what is this?: {this.props.notes[0].noteName} </h1>
            <form>
                <input value={this.props.notes[0].content} onChange={this.onUpdate}/>
                <button save={this.save}>Save</button>
            </form>
            </div>
        )   
    }

}



export default ShowUpdateForm;