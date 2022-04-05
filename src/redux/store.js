import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ContactReducer from './Reducers/Contacts/Contact'
import blockchainReducer from './Reducers/Blockchain/Blockchain'
import dataReducer from './Reducers/Data/Data'



 const rootReducer = combineReducers({
  contacts: ContactReducer,
  blockchain:blockchainReducer,
  data:dataReducer
})



const configureStore = () => {
  return createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
};

const store = configureStore();
export default store