import React from 'react';
import PropTypes from 'prop-types';

class LineSeparator extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      lines: this.separateLines(props.text),
    }
  }

  separateLines = (text) => {
    const lines = text.split(/<br\s?\/?>/);
    return lines.map((line, index) => <p key={index}>{line}</p>);
  }

  render() {

    return (
      <div className='lines'>
        {this.state.lines}
      </div>
    );

  }

}

export default LineSeparator;
