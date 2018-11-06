import database from '../firebase/firebase';


// SET_EXPENSES
export const setPublications = (publications) => ({
    type: 'SET_PUBLICATIONS',
    publications
});

// 1. fetch all expenses data
// 2. Parse that data into an array, cause data from firebase are nested objects with the id as the key for each expense
// 3. dispatch SET_EXPENSES

export const startSetPublications = () => {
    return (dispatch, getState) => {
        // add return so that we can chain .then() in the app.js
        return database.ref('publications').once('value').then((snapshot) => {
            const publications = [];
            snapshot.forEach((childSnapshot) => {
                publications.push({
                    id: childSnapshot.key,
                    content: childSnapshot.val()
                })
            });
            dispatch(setPublications(publications));
        });
    }
};