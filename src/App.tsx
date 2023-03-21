import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Activate } from './pages/Activate';
import { Home } from './pages/Home';
import { Chat } from './pages/Chat';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="activate/:activationToken" element={<Activate />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="chat" element={<Chat />} />
        </Route>

      </Routes>
    </div>
  );
};
