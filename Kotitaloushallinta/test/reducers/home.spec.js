import reducer from '../../app/reducers/home';

describe('reducers', () => {

  describe('home', () => {

    let state;
    let currentTime;

    beforeEach(() => {
      currentTime = Date.now();
        state = {
            tasks: [{
                title: 'Existing Task',
                days: '2',
                startingTime: '1529863189132',
                id: '000000000'
            }],
            editMode: false
        };
    });

    // LOAD TASKS

    it('should load tasks', () => {
        const action = {
            type: 'LOAD_TASKS',
            payload: {
                home: {
                    tasks: [{
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
        };
        const expectedResults = Object.assign({}, action.payload);
        expect(reducer({}, action)).toEqual(expectedResults); // It should return the three existing tasks
    });

    // CREATE NEW TASK

    it('should create a new task', () => {
        const action = {
            type: 'NEW_TASK',
            payload: {
                task: {
                    title: 'Test Task',
                    days: '5',
                    startingTime: currentTime,
                    id: '123456789'
                }
            }
        };
        const expectedResults = { "days": "5", "id": "123456789", "startingTime": 1534583444078, "title": "Test Task" };
        expect(reducer(state, action).tasks.length).toEqual(2); // It should return the updated tasks array with two task (the existing one plus the newly created one)
        expect(reducer(state, action).tasks[1].days).toEqual(expectedResults.days); // The newly created task should have the correct day
        expect(reducer(state, action).tasks[1].id).toEqual(expectedResults.id); // The newly created task should have the correct id
        expect(reducer(state, action).tasks[1].title).toEqual(expectedResults.title); // The newly created task should have the correct title
    });

    // DELETE EXISTING TASK

    it('should delete an existing task', () => {
        const action = {
            type: 'DELETE_TASK',
            payload: '000000000'
        };
        expect(reducer(state, action).tasks.length).toEqual(0); // It should return the updated tasks array with the deleted task removed
    });

    // UPDATE EXISTING TASK

    it('should edit an existing task', () => {
        const action = {
            type: 'EDIT_TASK',
            payload: {
                task: {
                    title: 'Test Task New Name',
                    days: '5',
                    startingTime: currentTime,
                    id: '000000000'
                }
            }
        };
        const expectedResults = "Test Task New Name";
        expect(reducer(state, action).tasks[0].title).toEqual("Test Task New Name"); // It should return the edited task with the new title
    });

    // TOGGLE EDIT MODE
    it('should toggle edit mode', () => {
        // prepare
        const action = {
            type: 'TOGGLE_EDIT_MODE',
        };
        const expectedResults = {
            tasks: [{
                title: 'Existing Task',
                days: '2',
                startingTime: '1529863189132',
                id: '000000000'
            }, ],
            editMode: true
        };

        // run test and asset
        expect(reducer(state, action)).toEqual(expectedResults);
    });
});

});