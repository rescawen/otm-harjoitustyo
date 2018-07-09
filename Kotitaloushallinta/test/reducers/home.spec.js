import { expect } from 'chai';
import reducer from '../../app/reducers/home';

describe('reducers', () => {

    describe('home', () => {

        it('should handle LOAD_TASKS', () => {
            const currentTime = Date.now();
            const action = {
                type: 'LOAD_TASKS',
                payload: {
                    task: {
                        title: 'Test Task',
                        days: '5',
                        startingTime: currentTime
                    }
                }
            };
            const test = Object.assign({}, action.payload);
            expect(reducer({}, action)).to.deep.equal(test);
        });
    });

});
