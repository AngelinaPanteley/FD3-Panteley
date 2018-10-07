import React from 'react';
import PropTypes from 'prop-types';
import ColorFrame from './ColorFrame';

class Rainbow extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      frames: this.createFrames(props),
    }
  }

  createFrames(props) {
    let frames = [];

    props.colors.forEach((color, index) => {
      frames.push(
        <ColorFrame color={color}>
          {!!(index - 1 >= 0) && frames[index - 1]}
        </ColorFrame>
      );
    });

    return frames;
  }

  render() {

    return (
      <div className='rainbow'>
        {this.state.frames[this.state.frames.length - 1]}
      </div>
    );

  }

}

export default Rainbow;
