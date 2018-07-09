import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import homeActions from '../actions/home';

const mapStateToProps = (state) => {
	console.log('Loading HomePage');
	console.log(state);
  return {
	  tasks: state.home.tasks
	};
};

const mapDispatchToProps = (dispatch) => {
  const home = bindActionCreators(homeActions, dispatch);
  return {
    loadTasks: (data) => {
      home.loadTasks(data);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
