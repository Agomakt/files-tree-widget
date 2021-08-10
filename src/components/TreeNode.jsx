import React from 'react'
import Tree from './Tree';

const TreeNode = ({node}) => {
  const {id, title, children} = node;
  const hasChild = !!children 

  return (
    <li>
      <div style={{display: 'flex'}}>
        <div>{id}</div>
        <div>{title}</div>
        
        {hasChild && children.length && <Tree data={children} />}
      </div>
      
    </li>
  )
}

export default TreeNode
