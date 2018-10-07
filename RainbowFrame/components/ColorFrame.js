import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div style={{ border: "solid 6px " + this.props.color }}>
        {this.props.children}
      </div>
    );
  }

}

export default ColorFrame;
