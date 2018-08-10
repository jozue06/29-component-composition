import React from 'react';
import Style from '../style/styles.js'


class ShowUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        }
        // this.onUpdate = this.onUpdate.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }

    // onUpdate(event) {
    //     let newState = Object.assign(this.props.noteName);
    //     newState[event.target.name] = event.target.value;
    //     this.setState(newState);
    // }

 

    cancel() {
        this.props.updatingNote({});
    }



    handleChange(e) {   
        const change = e.target.value;
        console.log('change ', change)
        const content = this.state.content
        console.log('handle change state ', this.state.notes)
        this.setState({ content: change });
    }

    // handleSave(e) {
    //     e.preventDefault();
        
    //     console.log('this statmelel---->', this.state)
    //     this.setState({
    //         content: ''
    //     })
    // }

    handleSave(e) {
        e.preventDefault();
        console.log('handle save? ', this.state.notes);
        this.props.save(this.state.notes);
    }
    

    render() {
        return <form id="form" >
            <Style.Text>  <textarea type="field" name="content" placeholder={this.props.notes[0].content} value={this.props.notes.content} onChange={this.handleChange} /></Style.Text>
            <Style.Button onClick={this.handleSave} type="save" value="save">Save</Style.Button>
        </form>;
    }

}


export default ShowUpdateForm;


