// src/redux/reducers/authReducer.js
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return { ...state, loading: false, user: action.payload.user, token: action.payload.token };
    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

export default authReducer;
