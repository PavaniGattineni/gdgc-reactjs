import { SUBMIT_FORM_REQUEST,SUBMIT_FORM_SUCCESS,SUBMIT_FORM_FAILED } from "../../Types/Form/form";

const initial_state={
    email:"",
    address:""
}

const FormReducer=(state=initial_state,action)=>{
    switch(action.type){
        case SUBMIT_FORM_REQUEST:
            return{
                ...state,
                loading:true
            };
        case SUBMIT_FORM_SUCCESS:
                return{
                    ...state,
                    loading:false,   
                };
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

export default FormReducer;