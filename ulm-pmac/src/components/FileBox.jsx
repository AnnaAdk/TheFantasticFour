import React,  { useCallback, useMemo} from 'react';
import { useDropzone } from 'react-dropzone';

const acceptStyle = {
  borderColor: '#00ff00'
};

function FileBox() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps, 
    getInputProps, 
    isDragAccept, 
    isDragActive, 
    isDragReject
    } = useDropzone({
        onDrop,
        accept: "image/jpeg, image/png"
      });
  


  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="FileBox">Drag and drop your files here.</div>
    </div>
  )
}

export default FileBox;
