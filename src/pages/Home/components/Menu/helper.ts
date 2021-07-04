interface knowledgeCategory {
  knowledgeCategoryId: number;
  knowledgeCategoryName: string;
  knowledgeCategoryParentId: number;
}

interface knowledgeTreeNodeType {
  id?: number;
  title: string;
  key: string;
  children?: Array<knowledgeTreeNodeType> | [];
}

export const mapListToTree = (list: Array<knowledgeCategory> | any) => {
  if (list instanceof Array) {
    if (list.length == 0) {
      return;
    }
  } else {
    return;
  }
  let roots: Array<knowledgeTreeNodeType> = [];

  let map: any = {},
    node,
    i: number;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].knowledgeCategoryId] = i;
    list[i].children = [];
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.knowledgeCategoryParentId !== 0) {
      list[map[node.knowledgeCategoryParentId]].children.push({
        id: node.knowledgeCategoryId,
        title: node.knowledgeCategoryName,
        key: node.knowledgeCategoryId.toString(),
        children: node.children,
      });
    } else {
      roots.push({
        id: node.knowledgeCategoryId,
        title: node.knowledgeCategoryName,
        key: node.knowledgeCategoryId.toString(),
        children: node.children,
      });
    }
  }

  return roots;
};
