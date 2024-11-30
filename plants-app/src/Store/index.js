import {createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../Reducers/index';

const composed = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composed);

export default store;