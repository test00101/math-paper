import React from 'react';
import { Tree } from 'antd';
import { mapListToTree } from './helper';

import styles from './index.module.less';
import './antCustomStyle.less';

const { DirectoryTree } = Tree;

interface MenuProps {
  data: any;
  setSelectedNode?: Function;
}

const Menu: React.FC<MenuProps> = ({
  data,
  setSelectedNode = ({ title, id }: { title: string; id: number }) => {},
}) => {
  const onSelect = (selectedKeys: any, info: any) => {
    console.log('当前选择的节点是', selectedKeys, info);

    const {
      node: { title, id },
    } = info;

    setSelectedNode({ id, title });
  };

  const categories = mapListToTree(data);

  return (
    <div>
      <h2 className={styles.menuTitle}>知识点</h2>
      <DirectoryTree
        multiple
        className={styles.menuNodes}
        defaultExpandAll={true}
        icon={<span />}
        onSelect={onSelect}
        treeData={categories}
      />
    </div>
  );
};

export default Menu;
