import {useEffect} from 'react';
import {BackHandler} from 'react-native';

function useBackButtonHandler(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}
export default useBackButtonHandler;
