import { SUBMIT_FORM } from "./formType"


const initialState={
    name:"",
    age:0
}

export const formReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case SUBMIT_FORM:
            return{
                ...state,
                name:payload.name,
                age:payload.age
            }
        default:
            return state
    }
}