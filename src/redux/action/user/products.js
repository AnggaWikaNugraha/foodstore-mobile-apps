import {setLoading} from '../../../utils/loading';
import {
  PRODUCT,
  ERROR_PRODUCT
} from '../../type/user/products';
import {showMessage} from '../../../utils/flashMessage';
import { getItems } from '../../../api/user/products';

const succesGetItems = payload => {
  return {
    type: PRODUCT,
    payload,
  };
};

const errorGetItem = () => {
  return {
    type: ERROR_PRODUCT,
  };
};

export const actionGetItems = (token) => {
  return async dispatch => {
    try {
      await getItems(token).then(res => {
        if (res.status === 200) {
          dispatch(succesGetItems(res.data.data));
        } else {
          showMessage('Gagal Login');
          dispatch(errorGetItem());
        }

      })
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
    
  };
};
