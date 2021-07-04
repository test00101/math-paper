import React from 'react';
import { Collapse } from 'antd';
import { QuestionType } from '../../../../types';
import styles from './index.module.less';

const { Panel } = Collapse;

interface MathItemProps {
  item: QuestionType;
}

const MathItem = ({ item }: MathItemProps): React.ReactElement => {
  const handleEdit = (item: QuestionType) => {
    console.log(item);
  };

  function callback(key: any) {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <section key={item.id} className={styles.itemWrap}>
      mathItem
    </section>
  );
};

export default MathItem;
