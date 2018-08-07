import { createAction } from 'redux-actions';

export default {
  loadTasks: createAction('LOAD_TASKS'),
  newTask: createAction('NEW_TASK'),
  deleteTask: createAction('DELETE_TASK'),
  editTask: createAction('EDIT_TASK'),
  toggleEditMode: createAction('TOGGLE_EDIT_MODE')
};
