import useBackButtonHandler from './useBackButtonHandler';
import {BackHandler} from 'react-native';
import Toast from '../Toast/Toast';

export default function ScreenBackhandler() {
  let counter = 0;

  const backAction = () => {
    if (counter !== 0) {
      BackHandler.exitApp();
    } else {
      setTimeout(() => {
        counter = 0;
      }, 2000);
      counter++;
      Toast('Press again to quit the application');
      return true;
    }
    BackHandler.removeEventListener('hardwareBackPress');
  };

  useBackButtonHandler(backAction);

return null;
}
