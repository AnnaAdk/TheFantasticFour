import React,  { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileBox() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="FileBox">Drag and drop your files here.</div>
    </div>
  )
}

export default FileBox;
