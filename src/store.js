//import Libraries
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';

//import Components
import firebase from 'firebase';
import * as fb from './firebase';

const saveToLocalStorage = (state) => {
    if(state.user && !state.user.login) {
        try {
            const serializedCart  = JSON.stringify(state.cart);
            localStorage.setItem('cart' , serializedCart);
        }catch(e) {
            console.log(e)
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(getFirebase)), 
                     reactReduxFirebase(firebase, { attachAuthIsReady : true } )));


store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
