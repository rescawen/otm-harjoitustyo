import { handleActions } from 'redux-actions';
import actions from '../actions/home'

export default handleActions({
  [actions.fetchTasks]: (state, action) => {
    return { ...state, ...action.payload };
  },
  [actions.newTask]: (state, action) => {
    return { ...state, ...action.payload };
  }
}, {});
