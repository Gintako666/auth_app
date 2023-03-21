import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { actions as userActions } from '../features/user';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar color="primary">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/chat">
                Chat
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/home">
                Home
              </NavLink>
            </Typography>
            {user !== null ? (
              <Button
                color="inherit"
                onClick={() => {
                  dispatch(userActions.removeUser());
                }}
              >
                Log out
              </Button>
            ) : (
              <>
                <NavLink to="/register">
                  <Button color="inherit">
                    Sign up
                  </Button>
                </NavLink>
                <NavLink to="/login">
                  <Button color="inherit">
                    Log in
                  </Button>
                </NavLink>
              </>
            )}
          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  );
};
