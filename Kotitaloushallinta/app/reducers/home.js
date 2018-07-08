import { handleActions } from 'redux-actions';
import actions from '../actions/home';

export default handleActions({
  [actions.loadTasks]: (state, action) => {
    return { ...state, ...action.payload };
  }
}, {});
