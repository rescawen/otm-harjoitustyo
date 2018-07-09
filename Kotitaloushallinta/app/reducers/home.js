import { handleActions } from 'redux-actions';
import actions from '../actions/home'

const initialState = {
  tasks: []
};

export default handleActions({
  [actions.loadTasks]: (state, action) => {
    return { ...state, ...action.payload };
  },
  [actions.newTask]: (state, action) => {
    return { ...state, tasks: state.tasks.concat(action.payload.task) };
  }
}, initialState);
