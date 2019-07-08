import {createStore, compose/* , applyMiddleware*/} from 'redux';
import rootReducer from './reducers';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}
const composedEnhancer = compose(/* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/ ...enhancerList);
const initStore = () => createStore(rootReducer, {}, composedEnhancer);

export default initStore;
