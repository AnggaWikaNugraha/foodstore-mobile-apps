import {showMessage as toastMessage} from 'react-native-flash-message';
import {colors} from './colors';

export const showMessage = (message, type, backgroundColor, color, onPress) => {
  toastMessage({
    message,
    type,
    backgroundColor,
    color,
    onPress : onPress ? onPress: () => { console.log('tes') }
  });
};