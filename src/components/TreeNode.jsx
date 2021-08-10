import React, { useState } from 'react';
import { StyledName } from './StyledName';
import Tree from './Tree';
import { iconRender } from '../utils';
import { Collapse } from './Collapse';


const TreeNode = ({node}) => {
  const {id, title, children} = node;
  const hasChild = !!children 

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleChildren = () => {
    hasChild && setIsOpen(!isOpen)
  }

  return (
      <div>
        <StyledName key={id} title={title} onClick={handleToggleChildren}> 
          {iconRender(title, children)}
          <div className='title'>{title}</div>
        </StyledName>
        
          {hasChild && children && (
            <Collapse style={{paddingLeft: '15px'}} isOpen={isOpen}>
              <Tree data={children} />
            </Collapse>
            )
          }

        </div>
    
  )
}

export default TreeNode;