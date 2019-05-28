import React, { Component } from 'react';
import { connect } from 'react-redux';

import './todo.css';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

class ToDo extends Component {

  state = {
    taskText: '',
  }

  handlerInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  }

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filter, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filter);
    const taskCounter = this.getActiveTasksCounter(tasks)

    return (
      <div className="todo-wrapper">
        <ToDoInput
          onKeyPress={this.addTask}
          onChange={this.handlerInputChange}
          value={taskText}/>

        {isTasksExist && <ToDoList
          tasksList={filteredTasks}
          removeTask={removeTask}
          completeTask={completeTask} />}

        {isTasksExist && <Footer
          amount={taskCounter}
          activeFilter={filter}
          changeFilter={changeFilter}
        />}
      </div>
    );
  }
}

const mapStateToProps = ({ tasks, filter }) => ({ tasks, filter });

export default connect(mapStateToProps, {
  addTask,
  removeTask,
  completeTask,
  changeFilter,
})(ToDo);
