import React, { useState } from 'react';
import { StyledName } from './StyledName';
import Tree from './Tree';
import { iconRender } from '../utils';
import { Collapse } from './Collapse';
import { getFilesData } from '../api';
import { useDispatch, useSelector } from 'react-redux';


const TreeNode = ({node}) => {
  const currentState = useSelector(state => state);
  const dispatch = useDispatch()
  console.log('currentState', currentState)

  const {id, title, children} = node;
  const hasChild = !!children 

  const [isOpen, setIsOpen] = useState(true);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleToggleChildren = (id) => {
    if ( hasChild && !isUploaded) {
      console.log('click on button');
      if (id !==0) {
        ( async () => {
        const childTree = await getFilesData(id)
        
        dispatch({
          type: 'OPEN_AND_LOAD',
          payload: {
            id, 
            children: childTree.data, 
          }
        })
        setIsUploaded(true)
        setIsOpen(true)
        })();
      }
    }
    setIsOpen(!isOpen)
  }

  return (
      <div>
        <StyledName key={id} title={title} onClick={() => handleToggleChildren(id)}> 
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