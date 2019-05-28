import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, id, removeTask }) => (
  <li className="todo-item">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  id: PropTypes.string,
  removeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  id: '',
  removeTask: () => {},
}

export default ToDoItem;
