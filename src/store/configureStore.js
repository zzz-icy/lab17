// store creation
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import publicationsReducer from '../reducers/publications';
import peopleReducer from '../reducers/people';
import thunk from 'redux-thunk';

// will do the following in the app.js
// const store = configureStore();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        // register each reducer here
        combineReducers({
            publications: publicationsReducer,
            people: peopleReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

    return store;
};
/* eslint-enable */



// timestamps(milliseconds)
// Janurary 1st 1970 (unix epoch)
// 33400  33400 milliseconds after the unix epoch