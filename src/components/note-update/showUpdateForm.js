import React from 'react';
import Style from '../style/styles.js'


class ShowUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.note,
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
        console.log('this statmelel---->', this.state)
        this.setState({
            content: e.target.value,
        });
    }


    handleSave = (e) => {
        e.preventDefault();
        let note = { ...this.props.note };
        note.content = this.state.content;
        this.props.save(note);
    }


    render() {
        return <form id="form" >
            <Style.Text>  <textarea type="field" name="content" value={this.state.content} onChange={this.handleChange} /></Style.Text>
            <Style.Button onClick={this.handleSave} type="save" value="save">Save</Style.Button>
        </form>;
    }

}


export default ShowUpdateForm;


