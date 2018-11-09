import database from '../firebase/firebase';
export const addPeople = (peopleinfo) => (
    {
        type: 'ADD_PEOPLE',
        peopleinfo
    });


export const startAddPeople = (peopleinfo) => {
    return (dispatch, getState) => {
        // const name = peopleinfo.name;
        // const {
        //     title = '',
        //     biography = '',
        // } = peopleinfo;
        // const people = { title, biography };
        // add return so that we can chain .then() in the test
        console.log('action:', peopleinfo);
        return database.ref(`people`).push(peopleinfo).then((ref) => {
            //.then() gets called with the ref, so we have access to the id 
            dispatch(addPeople(
                {
                    id: ref.key,
                    ...peopleinfo
                }
            ));
        });
    }
};

// SET_EXPENSES
export const getPeople = (people) => ({
    type: 'GET_PEOPLE',
    people
});

// 1. fetch all expenses data
// 2. Parse that data into an array, cause data from firebase are nested objects with the id as the key for each expense
// 3. dispatch SET_EXPENSES

export const startGetPeople = () => {
    return (dispatch, getState) => {
        // add return so that we can chain .then() in the app.js
        return database.ref('people').once('value').then((snapshot) => {
            const publications = [];
            snapshot.forEach((childSnapshot) => {
                publications.push({
                    id: childSnapshot.key,
                    content: childSnapshot.val()
                })
            });
            dispatch(getPeople(publications));
        });
    }
};