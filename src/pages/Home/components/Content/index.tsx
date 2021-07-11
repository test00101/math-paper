import React, { useState } from 'react';
import { Empty } from 'antd';
import { QuestionType } from '../../../../types';
import styles from './index.module.less';
import MathItem from '../MathItem';
import { useFetchData } from '../../../../hooks';
import Questions from '../Questions';

interface ContentProps {
  questiontype: Array<any>;
  knowledgeCategory: number;
}

const compare = (p: string | number) => {
  return function (m: { [x: string]: any }, n: { [x: string]: any }) {
    const a = m[p];
    const b = n[p];
    return a - b;
  };
};

const Content: React.FC<ContentProps> = ({
  questiontype = [],
  knowledgeCategory,
}: ContentProps): React.ReactElement => {
  const [currentQuestionType, setCurrentQuestionType] = useState(0);

  const handleQuestionTypeClick = (id: number) => {
    setCurrentQuestionType(id);
  };

  return (
    <div className={styles.contentWrap}>
      <div className={styles.questionTypeWrapper}>
        <span className={styles.typeName}>题型：</span>
        {questiontype.sort(compare('questionTypeId')).map((type) => {
          return (
            <span
              key={type.questionTypeId}
              className={`${styles.typeItem} ${type.questionTypeId === currentQuestionType ? styles.active : ''}`}
              onClick={() => handleQuestionTypeClick(type.questionTypeId)}>
              {type.questionTypeName}
            </span>
          );
        })}
      </div>

      <Questions
        questiontype={questiontype}
        currentQuestionType={currentQuestionType}
        knowledgeCategory={knowledgeCategory}
      />
    </div>
  );
};

export default Content;
