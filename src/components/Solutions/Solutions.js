import React, { Component, PropTypes } from 'react';
import Flex from '../Flex/Flex';
import './Solutions.css';

export default class Solutions extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <Flex container direction="vertical" space="x1">
        { children }
      </Flex>
    );
  }
}
