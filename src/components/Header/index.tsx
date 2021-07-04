import React from 'react';
import { Row, Col } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './index.module.less';

const Header: React.FC = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push('/');
  };

  return (
    <Row className={styles.header}>
      <Col span={4} className={styles.logo} onClick={backToHome}>
        LOGO
      </Col>
      <Col span={20} className={styles.menuWrap}>
        <ul className={styles.menuList}>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">
              题库
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/paper">
              组卷
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/about">
              关于
            </NavLink>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Header;
