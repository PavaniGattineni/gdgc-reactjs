import axios from 'axios'
import {
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILED
} from '../../Types/Contacts/submittypes'

const SubmitForm = (data) => async (dispatch) => {
  dispatch({ type: SUBMIT_FORM_REQUEST})
  
  try {
     
    const res = await axios.post(
      `http://3.110.222.123/api/contact/contact-us`,data
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