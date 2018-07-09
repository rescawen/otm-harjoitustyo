import { handleActions } from 'redux-actions';
<<<<<<< HEAD
import actions from '../actions/home'

export default handleActions({
  [actions.fetchTasks]: (state, action) => {
    return { ...state, ...action.payload };
  },
  [actions.newTask]: (state, action) => {
=======
import actions from '../actions/home';



export default handleActions({
  [actions.loadTasks]: (state, action) => {
>>>>>>> 83bd9cb1cbebdecc5c8f3806feb7256e93390197
    return { ...state, ...action.payload };
  }
}, {});
