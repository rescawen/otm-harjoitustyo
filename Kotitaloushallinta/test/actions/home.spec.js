import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../app/actions/home';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {

  describe('home', () => {

    let store;
    let currentTime;

    beforeEach(() => {
      store = mockStore({});
      currentTime = Date.now();
    });

    // LOAD TASKS

    it('should load tasks', () => {
      const expectedActions = [{
        type: 'LOAD_TASKS',
        payload: {
          home: {
            tasks: [
              {
                title: 'Changing bedsheets',
                days: '7',
                startingTime: '1529863189000',
                id: '1234567890'
              },
              {
                title: 'Vacuuming',
                days: '5',
                startingTime: '1529776789000',
                id: '1234567891'
              },
              {
                title: 'Stocking refrigerator',
                days: '4',
                startingTime: '1530122615000',
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
              startingTime: '1529863189000',
              id: '1234567890'
            },
            {
              title: 'Vacuuming',
              days: '5',
              startingTime: '1529776789000',
              id: '1234567891'
            },
            {
              title: 'Stocking refrigerator',
              days: '4',
              startingTime: '1530122615000',
              id: '1234567892'
            }
          ]
        }
      }));

      expect(store.getActions()).toEqual(expectedActions);
    });

    // CREATE NEW TASK

    it('should create a new task', () => {
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

      expect(store.getActions()).toEqual(expectedActions);
    });

    // DELETE EXISTING TASK

    it('should edit an existing task', () => {
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

      expect(store.getActions()).toEqual(expectedActions);
    });

    // UPDATE EXISTING TASK

    it('should delete an existing task', () => {
      const expectedActions = [{
        type: 'DELETE_TASK',
        payload: '123456789'
      }];

      store.dispatch(actions.deleteTask('123456789'));

      expect(store.getActions()).toEqual(expectedActions);
    });

    // TOGGLE EDIT MODE

    it('should handle TOGGLE_EDIT_MODE', () => {
      // prepare
      const expectedActions = [{
        type: 'TOGGLE_EDIT_MODE'
      }];

      // run
      store.dispatch(actions.toggleEditMode());

      // assert
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
