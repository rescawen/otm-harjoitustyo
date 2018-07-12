import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../app/actions/home';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {

  describe('home', () => {

    // LOAD TASKS

    it('should load tasks', () => {
      const store = mockStore({});
      const currentTime = Date.now();
      const expectedActions = [{
        type: 'LOAD_TASKS',
        payload: {
          home: {
            tasks: [
              {
                title: 'Changing bedsheets',
                days: '7',
                startingTime: "1529863189000",
                id: '1234567890'
              },
              {
                title: 'Vacuuming',
                days: '5',
                startingTime: "1529776789000",
                id: '1234567891'
              },
              {
                title: 'Stocking refrigerator',
                days: '4',
                startingTime: "1530122615000",
                id: '1234567892'
              }
            ]
          }
        }
      }];

      store.dispatch(actions.loadTasks({
        home: {
          tasks: [
            {
              title: 'Changing bedsheets',
              days: '7',
              startingTime: "1529863189000",
              id: '1234567890'
            },
            {
              title: 'Vacuuming',
              days: '5',
              startingTime: "1529776789000",
              id: '1234567891'
            },
            {
              title: 'Stocking refrigerator',
              days: '4',
              startingTime: "1530122615000",
              id: '1234567892'
            }
          ]
        }
      }));

      expect(store.getActions()).deep.equal(expectedActions);
    });

    // CREATE NEW TASK

    it('should create a new task', () => {
      const store = mockStore({});
      const currentTime = Date.now();
      const expectedActions = [{
        type: 'NEW_TASK',
        payload: {
          task: {
            title: 'Test Task',
            days: '5',
            startingTime: currentTime,
            id: '123456789'
          },
        }
      }];

      store.dispatch(actions.newTask({
        task: {
          title: 'Test Task',
          days: '5',
          startingTime: currentTime,
          id: '123456789'
        },
      }));

      expect(store.getActions()).deep.equal(expectedActions);
    });

    // DELETE EXISTING TASK

    it('should edit an existing task', () => {
      const store = mockStore({});
      const currentTime = Date.now();
      const expectedActions = [{
        type: 'EDIT_TASK',
        payload: {
          task: {
            title: 'Test Existing Task',
            days: '5',
            startingTime: currentTime,
            id: '123456789'
          },
        }
      }];

      store.dispatch(actions.editTask({
        task: {
          title: 'Test Existing Task',
          days: '5',
          startingTime: currentTime,
          id: '123456789'
        },
      }));

      expect(store.getActions()).deep.equal(expectedActions);
    });

    // UPDATE EXISTING TASK

    it('should delete an existing task', () => {
      const store = mockStore({});
      const currentTime = Date.now();
      const expectedActions = [{
        type: 'DELETE_TASK',
        payload: '123456789'
      }];

      store.dispatch(actions.deleteTask('123456789'));

      expect(store.getActions()).deep.equal(expectedActions);
    });



  });
});
