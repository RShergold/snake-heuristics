import React, { Component, PropTypes } from 'react';
import Flex from '../Flex/Flex';
import SnakeHeuristicsSVG from './SnakeHeuristicsSVG';
import './Intro.css';

export default class Intro extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { history } = this.props;

    this.redirect = window.setTimeout(() => {
      history.push('/game');
    }, 4500);
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.clearTimeout(this.redirect);
    }
  }

  render() {
    return (
      <Flex
          alignChildrenHorizontal="middle"
          alignChildrenVertical="middle"
          maxWidth="small"
          parent>
        <SnakeHeuristicsSVG />
      </Flex>
    );
  }
}
