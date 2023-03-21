/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Stack, TextField, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

type Props = {
  sendFn: (email: string, password: string) => Promise<void>;
  type: string;
};

export const AuthForm: React.FC<Props> = ({ sendFn, type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  return (
    <form className="form">
      <Stack spacing={2}>
        <Typography variant="h4" component="h2">
          {type === 'login' && 'Log in'}
          {type === 'register' && 'Register'}
        </Typography>
        <TextField
          id="outlined-basic"
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={loadingButton}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          disabled={loadingButton}
        />
        <LoadingButton
          className="button"
          type="submit"
          variant="outlined"
          onClick={(e) => {
            e.preventDefault();
            setLoadingButton(true);
            sendFn(email, password).then(() => {
              setLoadingButton(false);
            });
          }}
          loading={loadingButton}
        >
          {type !== 'login' && 'Register'}
          {type !== 'register' && 'Log in'}

        </LoadingButton>
        <p className="form__text">
          {type === 'login' && "Don't have an account?"}
          {type === 'register' && 'Alredy have an account?'}
          {' '}
          <Link className="form__text__link" to={type === 'login' ? '/register' : '/login'}>
            {type === 'login' && 'Register'}
            {type === 'register' && 'Log in'}
          </Link>
        </p>

      </Stack>

    </form>
  );
};
