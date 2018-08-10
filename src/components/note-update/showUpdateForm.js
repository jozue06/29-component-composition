import React from 'react';
import Style from '../style/styles.js'


class ShowUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        }
        this.cancel = this.cancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }


    cancel() {
        this.props.updatingNote({});
    }



    handleChange = (e) => {
        e.preventDefault();
        this.setState({content: e.target.value,});
    }


    handleSave = (e) => {
        e.preventDefault();
        let notes = this.state
        this.props.save(notes);
    }


    render() {
        return <form id="form" >
            <Style.Text>  <textarea type="field" name="content" placeholder={this.state.notes.content} value={this.state.notes.content} onChange={this.handleChange} /></Style.Text>
            <Style.Button onClick={this.handleSave} type="save" value="save">Update</Style.Button>
        </form>;
    }

}


export default ShowUpdateForm;


