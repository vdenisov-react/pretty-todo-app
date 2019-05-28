import { ADD_TASK } from '../constants';

const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export default addTask;
