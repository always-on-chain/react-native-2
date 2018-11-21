import { AsyncStore } from 'react-native';
import {
  FACEBOOK_LOGIN_SUCCESS
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AysncStorage.getItem('fb_token')

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // Dispatch an action saying FB loign is done
  } else {
    // Start up FB Login process
  }
};