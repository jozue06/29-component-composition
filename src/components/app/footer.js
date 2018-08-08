import React from 'react';
import styled from 'styled-components';

const Foot = styled.h1`
  background: papayawhip;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Footer extends React.Component {
  render() {
    return <Foot>feets</Foot>;
  }
}

export default Footer;