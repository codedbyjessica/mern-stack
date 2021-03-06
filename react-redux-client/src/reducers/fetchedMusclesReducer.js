import {REDUX_ACTION_CONSTANTS} from '../constants/reduxActionConstants';

export default function(state = [], action) {
    switch (action.type) {
        case REDUX_ACTION_CONSTANTS.FETCH_MUSCLES:
            // return [...action.data].reverse();
            return action.data;
        case REDUX_ACTION_CONSTANTS.ADD_MUSCLE:
            return [action.data, ...state];
        default:
            return state;
    }
}