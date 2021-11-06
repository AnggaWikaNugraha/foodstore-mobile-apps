import {
  REGISTER,
  REGISTER_ERROR
 } from '../../type/auth/TypeAuth';
 
 const statusList = {
   idle: 'idle',
   success: 'success',
   error: 'error',
 };
 
 const initialState = {
   response: {},
   params: {
     userRegister : {}
   },
   status: statusList.idle,
 };
 
 export default function Reducer(
   state = initialState,
   {type, payload} = action,
 ) {
   switch (type) {
     case REGISTER:
       return {
         ...state,
         params: {
           ...state.params,
           userRegister: payload,
         },
         status : statusList.success
       };
 
     case REGISTER_ERROR:
       return {
         ...state,
         params: {
           ...state.params,
           userRegister: {},
         },
         status : statusList.error
       };
 
     default:
       return state;
   }
 }