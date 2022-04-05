import {
    CONNECTION_REQUEST,
    CONNECTION_FAILED,
    CONNECTION_SUCCESS,
    UPDATE_ACCOUNT
} from '../../Types/Blockchain/Blockchain'

const initialState = {
    loading: false,
    account: null,
    smartContract: null,
    web3: null,
    errorMsg: "",
  };
  
  const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONNECTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CONNECTION_SUCCESS:
        return {
          ...state,
          loading: false,
          account: action.payload.account,
          smartContract: action.payload.smartContract,
          web3: action.payload.web3,
        };
      case CONNECTION_FAILED:
        return {
          ...state,
          loading: false,
          errorMsg: action.payload,
        };
      case UPDATE_ACCOUNT:
        return {
          ...state,
          account: action.payload.account,
        };
      default:
        return state;
    }
  };
  export default blockchainReducer;