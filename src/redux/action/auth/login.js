import {setLoading} from '../../../utils/loading';
import {
  LOGIN,
  LOGIN_ERROR
} from '../../type/auth/TypeAuth';
import {showMessage} from '../../../utils/flashMessage';
import { postItem } from '../../../api/auth/login';
import {StoreData} from '../../../utils/storage'

const succesPostItem = payload => {
  return {
    type: LOGIN,
    payload,
  };
};

const errorPostItem = () => {
  return {
    type: LOGIN_ERROR,
  };
};

export const actionPostItems = (item,navigation) => {
  return async dispatch => {
    try {
      await postItem(item).then(res => {
       
        if (res.status === 200) {
          StoreData('stateLogin', res.data)
          dispatch(succesPostItem(res.data));
          showMessage('Berhasil Login', 'success');
          navigation.reset({index: 0, routes: [{name: 'Beranda'}]});
        } else {
          showMessage('Gagal Login');
        }

      })
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
    
  };
};
