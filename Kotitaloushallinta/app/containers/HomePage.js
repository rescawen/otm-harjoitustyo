import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import homeActions from '../actions/home';


const mapStateToProps = (state) => {
  console.log('Loading HomePage');
  console.log(state);
  return {
    tasks: state.home.tasks,
    task: state.home.task,
    editMode: state.home.editMode
  };
};

const mapDispatchToProps = (dispatch) => {
  const home = bindActionCreators(homeActions, dispatch);
  return {
    loadTasks: (data) => {
      home.loadTasks(data);
    },
    goToAddTask: () => {
      console.log('Calling dispatch for /AddTask');
      dispatch(push('/AddTask'));
    },
    editTask: (data) => {
      console.log('Calling dispatch for /EditTask and passing Id');
      dispatch(push('/EditTask/' + data));
    },
    deleteTask: (data) => {
      home.deleteTask(data);
      console.log('Reloading Home');
      dispatch(push('/'));
    },
    toggleEditMode: () => {
      console.log('Toggling Edit Mode');
      home.toggleEditMode();
      home.loadTasks();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
