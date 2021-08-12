import {
  FolderOutlined,
  // FolderOpenOutlined,
  FileZipOutlined,
  FileTextOutlined,
  FilePdfOutlined,
  FileJpgOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileWordOutlined,
  FileExcelOutlined


} from '@ant-design/icons';



export const iconRender = (title, children = null) => {
  const checkTitle = (criteria) => {
    return title.toLowerCase().includes(criteria)
  }
  if (!children) {
    
    if (checkTitle('zip')) {
      return <FileZipOutlined /> 
    } else if (checkTitle('txt')) {
      return <FileTextOutlined /> 
    } else if (title.includes('pdf')) {
      return <FilePdfOutlined />
    } else if (title.includes('pdf')) {
      return <FilePdfOutlined />
    } else if (title.includes('jpg') || title.includes('jpeg')) {
      return <FileJpgOutlined />
    } else if (title.includes('gif')) {
      return <FileGifOutlined />
    } else if (title.includes('docx') || title.includes('doc')) {
      return < FileWordOutlined/>
    } else if (title.includes('xlsx') || title.includes('xls')) {
      return <FileExcelOutlined />
    } else return <FileImageOutlined />

  } else return <FolderOutlined />

}


export const findById = (node, id) => {
  if (node.id === id) return node; 
  var result = null;
  if (node.children) {
    for (var i = 0; i < node.children.length && result == null; i++) {
        result = findById(node.children[i], id)
    }
  }
  return result; 
}


// export const findPath = (ob, key, value) => {
//   const path = [];
//   const keyExists = (obj) => {
//     if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
//       return false;
//     }
//     else if (obj.hasOwnProperty(key) && obj[key] === value) {
//       return true;
//     }
//     else if (Array.isArray(obj)) {
//       let parentKey = path.length ? path.pop() : "";

//       for (let i = 0; i < obj.length; i++) {
//         path.push(`${parentKey}[${i}]`);
//         const result = keyExists(obj[i], key);
//         if (result) {
//           return result;
//         }
//         path.pop();
//       }
//     }
//     else {
//       for (const k in obj) {
//         path.push(k);
//         const result = keyExists(obj[k], key);
//         if (result) {
//           return result;
//         }
//         path.pop();
//       }
//     }

//     return false;
//   };

//   keyExists(ob);

//   return path.join(".");
// }

export const makeUpdate = (a, u) =>  {
  return Array.isArray(a) && a.some(function (b,i,bb) {
      if (b.id === u.id) {
          bb[i] = u;
          return true;
      }
      return makeUpdate(b.children, u);
  });
}