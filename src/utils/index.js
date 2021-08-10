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



export const iconRender = (title, children) => {
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