import {
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILED
} from '../../Types/Contacts/submittypes'

const initialState={
name:"",
email:"",
contactNumber:"",
message:""
}

const ContactReducer=(state=initialState,action)=>{
    switch(action.type){
        case SUBMIT_FORM_REQUEST:
            return {
                ...state,
                loading: true,
              }

        case SUBMIT_FORM_SUCCESS:
            return{
                ...state,
                loading:false,
            }    
        case SUBMIT_FORM_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload,
            } 
         default:
             return state;        
    }
}


export default ContactReducer