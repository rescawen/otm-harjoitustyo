import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../app/actions/home';

const mockStore = configureMockStore([ thunk ]);

describe('actions', () => {

  describe('home', () => {
    
    it('should display task', () => {
      const store = mockStore({});
      const expectedActions = [{
        type: 'DISPLAY_TASK',
        // WHAT SHOULD I PUT IN PAYLOAD?
        payload: {
          username: 'John Doe',
          loggedIn: true
        }
      }];

      store.dispatch(actions.displayTask({
        username: 'John Doe',
        loggedIn: true
      }));

      expect(store.getActions()).deep.equal(expectedActions);
    });

  });
});
