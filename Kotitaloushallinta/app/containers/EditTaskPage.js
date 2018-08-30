import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import EditTask from '../components/EditTask';
import homeActions from '../actions/home';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  console.log('Loading EditTaskPage');
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
    editTask: (data) => {
      console.log('Editing existing Task and dispatching to Home');
      home.editTask(data);
      dispatch(push('/'));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditTask));