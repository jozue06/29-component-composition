import React from 'react';
import Style from '../style/styles.js';


export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Style.Title>Welcome to my wonderful homepage landing thing</Style.Title>
    </div>;
  }
}