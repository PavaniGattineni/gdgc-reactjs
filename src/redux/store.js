import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ContactReducer from './Reducers/Contacts/Contact'

export const rootReducer = combineReducers({
  contacts: ContactReducer,
})

const initial_state = {
}

 const store = createStore(
  rootReducer,
  initial_state,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store