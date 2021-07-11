import React from 'react';
import MathJax from 'react-mathjax2';
import { QuestionType } from '../../../../types';
import styles from './index.module.less';

interface MathItemProps {
  mathData: any;
}

const MathItem = ({ mathData }: MathItemProps): React.ReactElement => {
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
    <section key={mathData.questionId} className={styles.itemWrap}>
      <p className={styles.questionDescription}>描述：</p>
      <MathJax.Context
        input="ascii"
        onLoad={() => console.log('Loaded MathJax script!')}
        onError={(MathJax: any, error: any) => {
          console.warn(error);
          console.log('Encountered a MathJax error, re-attempting a typeset!');
          MathJax.Hub.Queue(MathJax.Hub.Typeset());
        }}
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
        options={{
          asciimath2jax: {
            useMathMLspacing: true,
            delimiters: [['$$', '$$']],
            preview: 'none',
          },
        }}>
        <MathJax.Text text={mathData.description} />
      </MathJax.Context>
      <p className={styles.questionAnswers}>答案：</p>
    </section>
  );
};

export default MathItem;
