import { createAction } from 'redux-actions';

export default {
  fetchTask: createAction('FETCH_TASK'),
  newTask: createAction('NEW_TASK')
};
