import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import homeActions from '../actions/home';
import { withRouter } from 'react-router'

const mapStateToProps = (state) => {
	console.log('Loading HomePage');
	console.log(state);
  return {
    tasks: state.home.tasks,
    task: state.home.task
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
