import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import AddTask from '../components/AddTask';
import homeActions from '../actions/home';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
	console.log('Loading AddTaskPage');
  return {
	  tasks: state.home.tasks,
	  task: state.home.task
	};
};

const mapDispatchToProps = (dispatch) => {
  const home = bindActionCreators(homeActions, dispatch);
  return {
  	goToHome: () => {
      console.log('Calling dispatch for Home');
      dispatch(push('/'));
    },
    newTask: (data) => {
      console.log('Creating New Task and dispatching to Home');
      home.newTask(data);
      dispatch(push('/'));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddTask));