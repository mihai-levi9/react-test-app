const apiUrl = '';

export default class BooksApi {
    static getBooks(){
        return fetch(`${apiUrl}/books`)
            .then((res) => {
                return res.json();
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
