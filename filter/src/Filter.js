import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialList: props.list.slice(),
      filteredList: props.list.slice(),
      sortedList: props.list.slice(),
      inputValue: '',
      isSortingChecked: false,
    }

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.sortList = this.sortList.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  handleCheckbox(e) {
    const isChecked = e.target.checked;
    this.setState({
      isSortingChecked: isChecked,
    }, () => {
      isChecked && this.sortList();
    });
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value.toLowerCase(),
    }, () => {
      this.filterList();
    });
  }

  sortList() {
    this.setState((prevState) => {
      return {
        sortedList: prevState.filteredList.slice().sort()
      }
    });
  }

  filterList() {
    this.setState((prevState) => {
      return {
        filteredList: prevState.initialList.filter((item) => {
          return item.toLowerCase().includes(prevState.inputValue)
        })
      }
    });

    this.state.isSortingChecked && this.sortList();
  }

  render() {
    const renderList = this.state.isSortingChecked ?
      this.state.sortedList : this.state.filteredList;
    return <div className="filter">
      <div className="filter__form">
        <input type="checkbox" className="filter__checkbox"
          checked={this.state.isSortingChecked} onChange={this.handleCheckbox} />
        <input type="text" className="filter__input"
          value={this.state.inputValue} onChange={this.handleInput} />
      </div>
      <ul className="filter__list">
        {renderList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>;
  }
}

Filter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

export default Filter;