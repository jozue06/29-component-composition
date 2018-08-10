import React from 'react';
import Style from '../style/styles.js';


export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.showTable = this.showTable.bind(this);
  }
  


  showTable() {
 
    return this.props.notes;
  }

  render() { 
    return (
      <Style.Wrapper>
        <div>
          <ul>  
            <Style.Text>
              {this.showTable()}
            </Style.Text>
          </ul>
        </div>
      </Style.Wrapper>
    );
  }
}