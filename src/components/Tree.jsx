import React, { useEffect } from 'react';
import { getFilesData } from '../api';


const Tree = () => {
  useEffect(() => {
    getFilesData(20000).then(({data}) => console.log(data))
  }, [])


  return (
    <div>
      tree data
      
    </div>
  )
};

export default Tree;
