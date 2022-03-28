import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//en el store importo los reducers 
import personajesReducer from './rymDukcs'

const rootReducer = combineReducers({
    personajesRyM: personajesReducer
    //separados por , todos los reducers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store;
}