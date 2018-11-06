import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import './index.css';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';

// import Header from './components/Header';
import './firebase/firebase';
import * as serviceWorker from './serviceWorker';
const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
// ReactDOM.render(<Header />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
