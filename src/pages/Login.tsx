/* eslint-disable no-console */
import Alert from '@mui/lab/Alert';
import {
  Container,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { actions as userActions } from '../features/user';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { User } from '../types/User';
import { api } from '../utils/fetchClient';
import { AuthForm } from '../components/AuthForm';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);
  const [{ error }, setError] = useState<{
    error: null | string,
  }>({
    error: null,
  });

  const fn = async (email: string, password: string) => {
    try {
      const data: { data: User } = await api.login({
        email,
        password,
      });

      console.log(data);

      dispatch(userActions.setUser(data.data));
      navigate('/');
    } catch (e) {
      setError({ error: 'Log in error. Wrong login or password' });
      setTimeout(() => {
        setError({ error: null });
      }, 5000);
    }
  };

  console.log(user);

  return (
    <Container>
      { typeof (user?.activate) === 'string' ? (
        <>
          <h1 className="title">Check your email</h1>
          <p>Received a confirmation email</p>
        </>
      ) : (
        <>
          <AuthForm sendFn={fn} type="login" />
          {error !== null && (
            <Alert severity="error">
              {error}

            </Alert>
          )}
        </>
      )}

    </Container>

  );
};
