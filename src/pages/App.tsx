import React, { useState } from 'react';
import Header from '../components/Header';
import styles from './app.module.less';
import Router from '../router';
import Footer from '../components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Router />
      </div>

      <Footer />
    </div>
  );
}

export default App;
