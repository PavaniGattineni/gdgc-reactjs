import store from '../../store';
import { DATA_FAIL, DATA_REQUEST, DATA_SUCCESS } from '../../Types/Data/Data';


const fetchDataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: DATA_SUCCESS,
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: DATA_FAIL,
    payload: payload,
  };
};



export const fetchData  = () => async (dispatch) => {

      dispatch(fetchDataRequest());

      try {
        let totalSupply = await store.getState().blockchain.smartContract.methods.totalSupply().call();
        let cost = await store.getState().blockchain.smartContract.methods.cost().call();
        let list=await store.getState().blockchain.smartContract.methods.getWhitelistUsers().call();
        let whitelisted=await store.getState().blockchain.smartContract.methods.whitelisted(store.getState().blockchain.account).call();
        let presale =await store.getState().blockchain.smartContract.methods.PresaleMint().call();
        let owner=await store.getState().blockchain.smartContract.methods.owner().call();
        let account=await store.getState().blockchain.account;
        let checkowner= owner.toLowerCase() == account ? true : false;
        let winners=await store.getState().blockchain.smartContract.methods.getWinners().call();
        let paused=await store.getState().blockchain.smartContract.methods.paused().call();
     
      
  
        dispatch(fetchDataSuccess({
              totalSupply,
              cost,
              list,
              whitelisted,
              presale,
              checkowner,
              winners,
              paused
            }
        )
        );
      } catch (err) {
        dispatch(
         fetchDataFailed(err.message)
       );
      }
    };
  