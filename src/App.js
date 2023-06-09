import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
