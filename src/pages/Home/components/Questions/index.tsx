import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import { Empty, message, Result, Spin, Modal, Input } from 'antd';
import { useFetchData } from '../../../../hooks';
import { deleteQuestionById } from '../../../../service';
import MathItem from '../MathItem';
import MathJax from 'react-mathjax2';

const { TextArea } = Input;

interface QuestionsType {
  questiontype: Array<{
    questionTypeId: number;
    questionTypeName: string;
  }>;
  currentQuestionType: any;
  knowledgeCategory: any;
}

const Questions = ({ questiontype, currentQuestionType, knowledgeCategory }: QuestionsType) => {
  const [{ data, isLoading, isError }, setUrl] = useFetchData('/question', {});
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingQuestionInfo, setEditingQuestionInfo] = useState<any>(null);

  console.log(data);

  useEffect(() => {
    if (currentQuestionType === 0) {
      return;
    }
    setUrl(`/question/${currentQuestionType}`); // 此处需要修改，暂时获取全部试题（因为接口返回值的类型不同）
  }, [currentQuestionType]);

  // 请求失败的错误提示
  if (isError) {
    return <Result status={500} title="错误" subTitle="抱歉，发生了一些错误" />;
  }

  // 请求数据返回时的 loading
  if (isLoading) {
    return (
      <div className={styles.loadingWrap}>
        <Spin />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div>
        <Empty description={'没有数据'} />
      </div>
    );
  }

  const addToPaper = (question: any) => {
    console.log('加入试题篮的题目信息为：');
    console.log(question);
  };

  const handleEdit = (question: any) => {
    console.log('编辑的题目信息为：');
    console.log(question);
    setEditModalVisible(true);
    setEditingQuestionInfo(question);
  };

  const handleDelete = async (question: any) => {
    console.log('删除的题目信息为：');
    console.log(question);
    const res = (await deleteQuestionById(question.questionId)) as any;
    console.log(res);
    const { status } = res;
    if (status === 200) {
      message.success('删除成功', 10);
      setUrl(`/question/${currentQuestionType}`);
    }
  };

  const handleDescChange = ({ target: { value } }: any) => {
    console.log(value);
    const val = { ...editingQuestionInfo, description: value };
    setEditingQuestionInfo(val);
  };

  const handleSave = () => {
    setEditModalVisible(false);
    // 保存
  };

  return (
    <div className={styles.questionsWrap}>
      {data.map((question: any) => {
        return (
          <section key={question.questionId} className={styles.questionItemWrap}>
            <h3 className={styles.questionItemHeader}>
              <span>
                {
                  questiontype.find((item) => {
                    return item.questionTypeId === Number(question.type);
                  })?.questionTypeName
                }
              </span>
              <span>
                <span className={styles.editBtn} onClick={() => handleEdit(question)}>
                  编辑
                </span>
                <span className={styles.deleteBtn} onClick={() => handleDelete(question)}>
                  删除
                </span>
              </span>
            </h3>

            <div className={styles.questionContent}>
              <MathItem mathData={question} />
            </div>

            <p className={styles.questionItemFooter}>
              <span className={styles.info}>
                <span>试题编号：</span>
                <span>{question.questionId}</span>
              </span>
              <span className={styles.addToPaper} onClick={() => addToPaper(question)}>
                加入试卷
              </span>
            </p>
          </section>
        );
      })}

      <Modal
        className={styles.editorModal}
        title={`编辑试题`}
        centered
        visible={editModalVisible}
        onOk={handleSave}
        onCancel={() => setEditModalVisible(false)}
        okText={'保存'}
        cancelText={'取消'}
        width={800}>
        {editingQuestionInfo && (
          <div>
            <p className={styles.editItem}>
              <span>试题编号：</span>
              <span>{editingQuestionInfo.questionId}</span>
            </p>
            <div className={styles.editItem}>
              <p>试题描述：</p>
              <TextArea
                value={editingQuestionInfo.description}
                onChange={handleDescChange}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </div>
            <div className={styles.editItem}>
              <p>渲染结果：</p>
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
                <MathJax.Text text={editingQuestionInfo.description} />
              </MathJax.Context>
            </div>

            <div className={styles.editItem}>
              <p>答案：</p>
              <p>在这里添加答案</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Questions;
