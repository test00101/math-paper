import React from 'react';
import { Empty } from 'antd';
import { QuestionType } from '../../../../types';
import styles from './index.module.less';
import MathItem from '../MathItem';

interface ContentProps {
  data: Array<QuestionType>;
  menuNode: { title: string; id: number };
}

const Content: React.FC<ContentProps> = ({ data = [], menuNode }: ContentProps): React.ReactElement => {
  if (data.length === 0) {
    return (
      <div>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles.contentWrap}>
      <p>{menuNode.title || '全部试题'}</p>
      {data.map((item: QuestionType) => {
        return <MathItem item={item} />;
      })}
    </div>
  );
};

export default Content;
