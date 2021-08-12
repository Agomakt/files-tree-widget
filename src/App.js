import React, { useEffect } from 'react';
import Tree from './components/Tree';
// import { fullFFStructure } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesData } from './api';



const App = () => {
  const dispatch = useDispatch()
  const initialNode = useSelector(state => state.treeNode)
  console.log('initialNode', initialNode)

  useEffect(() => {
    ( async () => {
       const initialTree = await getFilesData()

       dispatch({
          type: 'INITIAL_LOAD',
          payload: initialTree.data 
        })
     }
    )();
  }, [])

  return (
    <>
      <h3>Happy coding!</h3>
      {initialNode.length && <Tree data={initialNode}/>}
    </>
  )
}

export default App;
