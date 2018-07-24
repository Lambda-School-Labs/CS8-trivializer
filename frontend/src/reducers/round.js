import { FETCHING_THREE, FETCHED_THREE, ERROR, ADDING_ROUND, ADDED_ROUND, FETCHING_ROUND, FETCHED_ROUND } from '../actions/types';

const INITIAL_STATE = {
    round: null,
    addingRound: false,
    storedRound: [],
    fetchingRound: false,
    errorMessage: '',
};

export default function(state=INITIAL_STATE, action) {
    // console.log("STATE", state);
    switch(action.type) {
        case FETCHING_ROUND:
            return { ...state, fetchingRound: true };
        case FETCHED_ROUND:
            return { ...state, storedRound: [...state.storedRound, action.payload] };
        case ADDING_ROUND:
            return { ...state, addingRound: true };
        case ADDED_ROUND:
            return { ...state, round: action.payload };
        case FETCHING_THREE:
            return { ...state, fetchingRound: true };
        case FETCHED_THREE:
            return {...state, round: action.payload  };
        case ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}