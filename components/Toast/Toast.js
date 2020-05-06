import {ToastAndroid} from 'react-native';

export default function Toast(message) {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
}
