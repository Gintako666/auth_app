/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { api } from '../utils/fetchClient';

export const Chat = () => {
  const { user } = useAppSelector(state => state.user);

  useEffect(() => {
    console.log(1);
    api.getUsers(user?.accessToken).then(data => {
      console.log(data);
    }).catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <div>Chat</div>
  );
};
