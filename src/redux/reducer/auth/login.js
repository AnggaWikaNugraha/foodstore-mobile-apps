import {
  LOGIN,
  LOGIN_ERROR
 } from '../../type/auth/TypeAuth';
 
 const statusList = {
   idle: 'idle',
   success: 'success',
   error: 'error',
 };
 
 const initialState = {
   response: {
      message : '',
      user : {},
      token : ''
   },
   params: {},
   status: statusList.idle,
 };
 
 export default function Reducer(
   state = initialState,
   {type, payload} = action,
 ) {
   switch (type) {
     case LOGIN:
       return {
         ...state,
         response: {
           ...state.response,
           message: payload.message,
           user : payload.user,
           token : payload.token
         },
         status : statusList.success
       };
 
     case LOGIN_ERROR:
       return {
         ...state,
         response: {
           ...state.response,
            response: {
              message : '',
              user : {},
              token : ''
            },
         },
         status : statusList.error
       };
 
     default:
       return state;
   }
 }