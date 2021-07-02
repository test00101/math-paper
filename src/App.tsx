import React, { useState } from 'react';
import styles from './index.module.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.appWrap}>
      <span>{count}</span>
      <span onClick={() => setCount(1)}>+</span>
    </div>
  );
}

export default App;
