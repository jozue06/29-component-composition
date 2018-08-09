import React from 'react';
import Style from '../style/styles.js'


class ShowUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes,
        }
        // this.onUpdate = this.onUpdate.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('change', change)
        this.setState({ [e.target.name]: change });
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     
    //     console.log('this statmelel---->', this.state)
    //     this.setState({
    //         content: ''
    //     })
    // }
    handleSave(e) {
        e.preventDefault();
        console.log('save?', this.state.content);
        this.props.save(this.state.content);
    }
    

    render() {
        return <form id="form" >
            <Style.Text>  <textarea type="field" name="content" placeholder={this.props.notes[0].content} value={this.state.content} onChange={this.handleChange} /></Style.Text>
            <Style.Button onClick={this.handleSave} type="save" value="save">Save</Style.Button>
        </form>;
    }

    // render(){
    //     console.log('this.props', this.props.notes)
    //     return(
    //         <div>
    //         <h1>what is this?: {this.props.notes[0].noteName} </h1>
    //         <form>
    //             <input value={this.props.notes[0].content} onChange={this.onUpdate}/>
    //             <button save={this.save}>Save</button>
    //         </form>
    //         </div>
    //     )   
    // }

}


export default ShowUpdateForm;


