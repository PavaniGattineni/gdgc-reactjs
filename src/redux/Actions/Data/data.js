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
  
        dispatch(fetchDataSuccess({
              totalSupply,
              cost
            }
        )
        );
      } catch (err) {
        console.log(err);
        dispatch(
         fetchDataFailed(err.message)
       );
      }
    };
  