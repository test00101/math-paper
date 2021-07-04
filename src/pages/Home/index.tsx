import React, { useState } from 'react';
import { Spin, Result } from 'antd';
import Menu from './components/Menu';
import Content from './components/Content';

import { useFetchData } from '../../hooks';

import styles from './index.module.less';

const defaultUrl = '/knowledgeCategory';

const Home = () => {
  const [{ data: knowledgeCategories, isLoading: isMenuLoading, isError: isMenuError }, setUrl] = useFetchData(
    defaultUrl,
    {}
  );
  const [menuNode, setMenuNode] = useState<{ title: string; id: number }>({ id: 0, title: '' });

  // 请求失败的错误提示
  if (isMenuError) {
    return <Result status={500} title="错误" subTitle="抱歉，发生了一些错误" />;
  }

  // 请求数据返回时的 loading
  if (isMenuLoading) {
    return (
      <div className={styles.loadingWrap}>
        <Spin />
      </div>
    );
  }

  // 设置选中的菜单节点
  const setSelectedNode = ({ title, id }: { title: string; id: number }) => {
    const node = { title, id };
    setMenuNode(node);
  };

  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.leftMenuWrap}>
          <Menu setSelectedNode={setSelectedNode} data={knowledgeCategories} />
        </div>

        <div className={styles.rightContent}>
          <Content data={knowledgeCategories} menuNode={menuNode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
