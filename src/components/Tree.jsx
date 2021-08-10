import React from 'react';
import TreeNode from './TreeNode';

// import React, { useEffect } from 'react';
// import { getFilesData } from '../api';


const Tree = ({data = []}) => {
  // useEffect(() => {
  //   getFilesData(20000).then(({data}) => console.log(data))
  // }, [])
  // console.log('data', data)

  return (
    <div>
      {data.map(tree => <TreeNode key={tree.id} node={tree} />)}
      
      
    </div>
  )
};

export default Tree;