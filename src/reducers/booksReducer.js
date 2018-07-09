import * as booksActions from '../actions/booksActions';

export default function booksReducer(state = [], action){
    switch (action.type){
        case booksActions.actionTypes.GET_BOOKS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
