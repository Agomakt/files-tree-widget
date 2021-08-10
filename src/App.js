import React from 'react';
import Tree from './components/Tree';
import { fullFFStructure } from './data';

const App = () => {
  return (
    <>
      Happy coding!
      <Tree data={fullFFStructure}/>
    </>
  )
}

export default App;
