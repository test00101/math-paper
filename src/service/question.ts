import { httpGet, httpPost, httpDelete } from '../utils/http';

export const getAllQuestions = () => {
  return httpGet('/question');
};

export const getQuestionById = (id: number) => {
  return httpGet(`/question/${id}`);
};

export const createQuestion = (params: any) => {
  return httpPost('/question', params);
};

export const deleteQuestionById = (id: number) => {
  return httpDelete(`/question/${id}`);
};
