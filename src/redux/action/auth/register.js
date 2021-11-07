import {setLoading} from '../../../utils/loading';
import {
  REGISTER,
  REGISTER_ERROR
} from '../../type/auth/TypeAuth';
import {showMessage} from '../../../utils/flashMessage';
import { postItem } from '../../../api/auth/register';
import { colors } from '../../../utils/colors';

const succesPostItem = payload => {
  return {
    type: REGISTER,
    payload,
  };
};

const errorPostItem = () => {
  return {
    type: REGISTER_ERROR,
  };
};

export const actionPostItems = (item,navigation) => {
  return async dispatch => {
    try {
      await postItem(item).then(res => {
       
        if (res.status === 200) {
          dispatch(succesPostItem(item));
          showMessage('Berhasil Register', 'success');
          navigation.navigate('Login')
        } else {
          showMessage('Gagal Register');
        }

      })
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
    
  };
};
