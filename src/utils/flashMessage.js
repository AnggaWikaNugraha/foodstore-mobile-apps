import {showMessage as toastMessage} from 'react-native-flash-message';
import {colors} from './colors';

export const showMessage = (message, type) => {
  toastMessage({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor:
      type === 'success' ? colors.message.success : colors.message.error,
  });
};