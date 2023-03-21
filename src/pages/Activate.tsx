/* eslint-disable no-console */
import { Alert, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/fetchClient';

export const Activate = () => {
  const { activationToken } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [resultActivation, setResultActivation] = useState(true);

  console.log(isLoading);

  useEffect(() => {
    setIsLoading(true);
    api.activateUser(activationToken || '')
      .then(() => {
        setResultActivation(true);
      })
      .catch(() => {
        setResultActivation(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <h1>Account activation</h1>
      {isLoading ? (
        'Loading...'
      ) : (
        <Alert severity={resultActivation ? 'success' : 'error'}>
          {
            resultActivation ? (
              'You account is now active'
            ) : (
              'Wrong activation link'
            )
          }

        </Alert>
      )}
    </Container>
  );
};
