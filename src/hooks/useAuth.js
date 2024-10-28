// src/hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthUser, selectAuthStatus } from '../selectors/authSelectors';
import { loginUser, logoutUser } from '../features/auth/authSlice';

export const useAuth = () => {
  const user = useSelector(selectAuthUser);
  const status = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  const login = (credentials) => dispatch(loginUser(credentials));
  const logout = () => dispatch(logoutUser());

  return { user, status, login, logout };
};
