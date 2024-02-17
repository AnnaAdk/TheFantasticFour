import React,  { useCallback, useMemo, useEffect, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import filePng from '../assets/file.png';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.5in',
  borderWidth: 2,
  borderRadius: 2,
  borderStyle: 'solid',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  borderColor: '#840029',
  transition: 'border .3s ease-in-out'
};
const activeStyle = {
  borderColor: '#2196ff'
};

const acceptStyle = {
  borderColor: '#00ff00'
};

const rejectStyle = {
  borderColor: '#ff0000'
};

function FileBox() {


  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const [files, setFiles] = useState([]);
  
  const filePreview = files.map(file => (
      <img
        key={file.name}
        src={file.preview}
        alt={file.name}
        style={{position: '', left: '50%', top: '30%', height: '100px'}}
      />

  ));


  const {
    getRootProps, 
    getInputProps, 
    isDragAccept, 
    isDragActive, 
    isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png, application/pdf'
      });
  
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <section className='FileBox' {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>
          {filePreview}
        </div>
        <div>
          Drop your file here.
        </div>
      </section>
    </>
  )
}

export default FileBox;
