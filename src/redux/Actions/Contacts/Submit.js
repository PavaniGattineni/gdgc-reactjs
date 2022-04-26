import axios from 'axios'
import {
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILED
} from '../../Types/Contacts/submittypes'

const SubmitForm = (data) => async (dispatch) => {
  dispatch({ type: SUBMIT_FORM_REQUEST})
  
  try {
    await axios.post(
      `http://theluxuryassetclub.xyz/api/contact/contact-us`,data, {
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

export default SubmitForm