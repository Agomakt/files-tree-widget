import { getFilesData } from '../api'

export const fetchTreeNode = (dirId) => async dispatch => {
  const response = await getFilesData(dirId)

  dispatch({type: 'INITIAL_LOAD', payload: response.data})
}


// export const selectSinglePost = () => {
//   return {
//     type: 'ADD_POST',
//     payload: {
//       id: 123,
//       title: 'Post Title'
//     }
//   }
// }


// export const fetchUser = (id) => async dispatch => {
//   const response =  await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({type: 'FETCH_USER', payload: response.data})

// }