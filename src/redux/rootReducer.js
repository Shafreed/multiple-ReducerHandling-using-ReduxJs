import { combineReducers } from '@reduxjs/toolkit'
import { formReducer } from './form/formReducer'
import counterReducer from './counter/counterReducer'


export const rootReducer=combineReducers({
    counter: counterReducer,
    form: formReducer
})