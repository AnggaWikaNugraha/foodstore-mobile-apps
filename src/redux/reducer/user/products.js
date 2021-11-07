import {
  PRODUCT,
  ERROR_PRODUCT
 } from '../../type/user/products';
 
 const statusList = {
   idle: 'idle',
   success: 'success',
   error: 'error',
 };
 
 const initialState = {
   response: {
      products : []
   },
   params: {},
   status: statusList.idle,
 };
 
 export default function Reducer(
   state = initialState,
   {type, payload} = action,
 ) {
   switch (type) {
     case PRODUCT:
       return {
         ...state,
         response: {
           ...state.response,
           products : payload
         },
         status : statusList.success
       };
 
     case ERROR_PRODUCT:
       return {
         ...state,
         response: {
           ...state.response,
            response: {
              products : []
            },
         },
         status : statusList.error
       };
 
     default:
       return state;
   }
 }