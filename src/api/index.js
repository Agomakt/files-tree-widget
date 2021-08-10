import axios from 'axios';

const rootURL = 'http://164.90.161.80:3000/'

export const getFilesData = (dirId=null) => axios.get(
  `${rootURL}api/content`, 
  {params: {dirId}}
  );




