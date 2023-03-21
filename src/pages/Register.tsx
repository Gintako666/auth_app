/* eslint-disable no-console */
import Alert from '@mui/lab/Alert';
import {
  Container,
} from '@mui/material';
import React, { useState } from 'react';
import { api } from '../utils/fetchClient';
import { AuthForm } from '../components/AuthForm';

export const Register = () => {
  const [sendData, setSendData] = useState(false);
  const [{ error }, setError] = useState<{
    error: null | string,
  }>({
    error: null,
  });

  const fn = async (email: string, password: string) => {
    try {
      await api.registration({
        email,
        password,
      });
      setSendData(true);
    } catch (e) {
      console.log(e);

      setError({ error: 'Register error' });
      setTimeout(() => {
        setError({ error: null });
      }, 5000);
    }
  };

  return (
    <Container>
      {sendData ? (
        <>
          <h1 className="title">Check your email</h1>
          <p>Received a confirmation email</p>
        </>
      ) : (
        <>
          <AuthForm sendFn={fn} type="register" />

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
