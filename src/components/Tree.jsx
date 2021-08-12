import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({data = []}) => {
  console.log('data', data)

  return (
    <div>
      {data && data.map(tree => {
        console.log('tree', tree)
        return <TreeNode key={tree.id} node={tree} />
      })}
      
      
    </div>
  )
};

export default Tree;