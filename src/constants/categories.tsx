import { ChildNodeType } from '../types';

const categories: Array<ChildNodeType> = [
  {
    id: 1,
    title: '集合与常用逻辑用语',
    key: '1',
    children: [
      {
        id: 21,
        title: '集合',
        key: '1-1',
        children: [
          {
            id: 211,
            title: '集合的含义与标识',
            key: '1-1-1',
          },
          {
            id: 212,
            title: '集合与集合的基本关系',
            key: '1-1-2',
            children: [
              {
                id: 2121,
                title: '子集',
                key: '1-1-1-2',
                children: [
                  {
                    id: 21211,
                    title: '真子集',
                    key: '1-1-1-2-1',
                  },
                ],
              },
              {
                id: 2122,
                title: '全集',
                key: '1-1-1-3',
              },
            ],
          },
          {
            id: 213,
            title: '集合的基本运算',
            key: '1-1-3',
          },
        ],
      },
      {
        id: 22,
        title: '常用逻辑用语',
        key: '1-2',
        children: [
          {
            id: 223,
            title: '交集',
            key: '1-2-1',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '函数',
    key: '2',
  },
  {
    id: 4,
    title: '平面向量',
    key: '3',
  },
  {
    id: 5,
    title: '数列',
    key: '4',
  },
];

export default categories;
