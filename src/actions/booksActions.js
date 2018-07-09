import booksApi from '../api/booksApi';

const GET_BOOKS = "GET_BOOKS";
const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";

export const actionTypes = {
    GET_BOOKS,
    GET_BOOKS_SUCCESS
};

export function getBooksSuccess(books){
    return {
        type: GET_BOOKS_SUCCESS,
        payload: books
    };
}

export function getBooks() {
    return function(dispatch){
        return booksApi.getBooks()
            .then((res)=>{
                dispatch(getBooksSuccess(res));
            });
    }
}
