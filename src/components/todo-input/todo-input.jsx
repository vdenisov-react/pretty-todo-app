import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  </div>
);

ToDoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
}

ToDoInput.defaultProps = {
  value: '',
  onChange: () => {},
  onKeyPress: () => {},
}

export default ToDoInput;
