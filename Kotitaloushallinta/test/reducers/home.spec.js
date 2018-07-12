import { expect } from 'chai';
import reducer from '../../app/reducers/home';

describe('reducers', () => {

    describe('home', () => {

        // LOAD TASKS

        it('should handle LOAD_TASKS', () => {
            const currentTime = Date.now();
            const action = {
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
            };
            const test = Object.assign({}, action.payload);
            expect(reducer({}, action)).to.deep.equal(test);
        });

        // CREATE NEW TASK

        it('should handle NEW_TASK', () => {
            const currentTime = Date.now();
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
            const test = Object.assign({}, action.payload);
            expect(reducer({}, action)).to.deep.equal(test);
        });

        // DELETE EXISTING TASK

        it('should handle DELETE_TASK', () => {
            const currentTime = Date.now();
            const action = {
                type: 'DELETE_TASK',
                payload: {
                    task: {
                        title: 'Test Task',
                        days: '5',
                        startingTime: currentTime,
                        id: '123456789'
                    }
                }
            };
            const test = Object.assign({}, action.payload);
            expect(reducer({}, action)).to.deep.equal(test);
        });

        // UPDATE EXISTING TASK

        it('should handle EDIT_TASK', () => {
            const currentTime = Date.now();
            const action = {
                type: 'EDIT_TASK',
                payload: {
                    task: {
                        title: 'Test Task',
                        days: '5',
                        startingTime: currentTime,
                        id: '123456789'
                    }
                }
            };
            const test = Object.assign({}, action.payload);
            expect(reducer({}, action)).to.deep.equal(test);
        });

    });

});
