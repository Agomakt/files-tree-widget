import React from 'react';
import Tree from './components/Tree';
import { fullFFStructure } from './data';

const App = () => {
  return (
    <div>
      Happy coding!
      <Tree data={fullFFStructure}/>
    </div>
  )
}

export default App;
