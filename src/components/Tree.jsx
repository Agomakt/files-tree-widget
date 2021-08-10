import React from 'react';
import TreeNode from './TreeNode';
// import React, { useEffect } from 'react';
// import { getFilesData } from '../api';


const Tree = ({data = []}) => {
  // useEffect(() => {
  //   getFilesData(20000).then(({data}) => console.log(data))
  // }, [])
  console.log('data', data)

  return (
    <div>
      <ul>
        {data.map(tree => <TreeNode node={tree} />)}
      </ul>
      
    </div>
  )
};

export default Tree;
