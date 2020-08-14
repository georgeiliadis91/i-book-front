import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import reducers from './reducers';

const middlewares: any = [];

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
	...reducers,
});

const store = createStore(
	rootReducers,
	composeEnhancers(applyMiddleware(...middlewares))
);

export { store };

export type AppState = ReturnType<typeof rootReducers>;
