import { DATA_FAIL, DATA_REQUEST, DATA_SUCCESS } from "../../Types/Data/Data";

const initialState = {
    loading: false,
    totalSupply: 0,
    cost: 0,
    error: false,
    errorMsg: "",
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
          errorMsg: "",
        };
      case DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          totalSupply: action.payload.totalSupply,
          cost: action.payload.cost,
          list:action.payload.list,
          whitelisted:action.payload.whitelisted,
          presale:action.payload.presale,
          winners:action.payload.winners,
          owner:action.payload.checkowner,
          paused:action.payload.paused,
          soldout:action.payload.soldout,
          error: false,
          errorMsg: "",
        };
      case DATA_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          errorMsg: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  