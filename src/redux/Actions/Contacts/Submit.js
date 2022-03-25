import axios from 'axios'
import {
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILED
} from '../../Types/Contacts/submittypes'

const SubmitForm = (data) => async (dispatch) => {
  dispatch({ type: SUBMIT_FORM_REQUEST})
  
  try {
     const res= await axios.post(
      `http://52.66.148.254/api/contact/contact-us`,data, {
        headers: {
          'content-type': 'application/json'
        }}
    )

    dispatch({
      type: SUBMIT_FORM_SUCCESS
    })
    console.log('success')
  } catch (error) {
    dispatch({
      type: SUBMIT_FORM_FAILED,
      payload: error.message,
    })
    console.log('failure')
  }
}

export default SubmitForm