import { SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILED } from "../../Types/Form/form";
import axios from 'axios'

const Submit=(data)=>async(dispatch)=>{
    dispatch({ type: SUBMIT_FORM_REQUEST})
  
    try {
      await axios.post(
        `http://52.66.148.254/api/whitelist/white-list`,data, {
          headers: {
            'content-type': 'application/json'
          }}
      )
  
      dispatch({
        type: SUBMIT_FORM_SUCCESS
      })
     
    } catch (error) {
      dispatch({
        type: SUBMIT_FORM_FAILED,
        payload: error.message,
      })
    }
}

export default Submit;