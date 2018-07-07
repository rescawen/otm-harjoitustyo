import { createAction } from 'redux-actions';

export default {
  loadTasks: createAction('LOAD_TASKS'),
  newTask: createAction('NEW_TASK')
};
