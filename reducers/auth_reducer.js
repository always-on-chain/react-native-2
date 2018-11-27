import { 
  FACEBOOK_LOGIN_SUCCESS, 
  FACEBOOK_LOGIN_FAIL 
} from '../actions/types';

export default function(state = {}, action) {
  if (action.type === FACEBOOK_LOGIN_SUCCESS) {
    return { token: action.payload };
  }
  if (action.type === FACEBOOK_LOGIN_FAIL) {
    return { token: null };
  }
  return state;
}