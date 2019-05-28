import { combineReducers } from 'redux';

import tasks from './tasks';
import filter from './filter';

const rootReducer = combineReducers({
  tasks,
  filter,
});

export default rootReducer;
