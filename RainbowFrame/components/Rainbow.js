import React from 'react';
import PropTypes from 'prop-types';

class Rainbow extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      frames: this.createFrames(props.colors),
    }
  }

  createFrames(colors) {
    let frames = [];

    colors.forEach((color, index) => {
      frames.push(
        <div style={{ border: "solid 6px " + color }}>
          {
            (index - 1 >= 0)
              ?
              frames[index - 1]
              :
              this.props.children
          }
        </div>
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
