import { handleActions } from 'redux-actions';
import actions from '../actions/home'

const initialState = {
  tasks: []
};

const replaceByKey = (array, params, newValue) => {
  array.some(function(item, index) {
    if(array[index][params.key] === params.value){
      array[index] = newValue
      return true;
    }
    return false;
  });
  return array;
}

const removeByKey = (array, params) => {
  array.some(function(item, index) {
    if(array[index][params.key] === params.value){
      array.splice(index, 1);
      return true;
    }
    return false;
  });
  return array;
}

export default handleActions({
  [actions.loadTasks]: (state, action) => {
    return { ...state, ...action.payload };
  },
  [actions.newTask]: (state, action) => {
    return { ...state, tasks: state.tasks.concat(action.payload.task) };
  },
  [actions.deleteTask]: (state, action) => {
    return { ...state, tasks: removeByKey(state.tasks, {key: 'id', value: action.payload})}
  },
  [actions.editTask]: (state, action) => {
    console.log(action);
    return { ...state, tasks: replaceByKey(state.tasks, {key: 'id', value: action.payload.task.id}, action.payload.task)};
  }
}, initialState);
