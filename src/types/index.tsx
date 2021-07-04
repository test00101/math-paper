/*
 * 分类列表
 * */
export interface ChildNodeType {
  id?: number;
  title: string;
  key: string;
  children?: Array<ChildNodeType> | [];
}

/*
 * 题目内容
 * */
export interface QuestionType {
  id: number;
  title: string;
  desc: string;
  content: string;
  answer: string;
}
