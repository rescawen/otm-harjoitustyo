import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../app/actions/home';

const mockStore = configureMockStore([ thunk ]);

describe('actions', () => {

  describe('home', () => {
    
    it('should load tasks', () => {
      const store = mockStore({});
      const currentTime = Date.now();
      const expectedActions = [{
        type: 'LOAD_TASKS',
        payload: {
          task: {
            title: 'Test Task',
            days: '5',
            startingTime: currentTime
          }
        }
      }];

      store.dispatch(actions.loadTasks({
        task: {
          title: 'Test Task',
          days: '5',
          startingTime: currentTime
        }
      }));

      expect(store.getActions()).deep.equal(expectedActions);
    });

  });
});
