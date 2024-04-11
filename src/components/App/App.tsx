import { Outlet } from 'react-router-dom';
import cls from './App.module.scss';
import Header from '../Header';
import Footer from '../Footer/Footer';
import React from 'react';

const App = () => {
  return (
    <div className={cls.app}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default React.memo(App);
