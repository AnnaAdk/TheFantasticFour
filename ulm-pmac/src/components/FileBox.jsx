import React,  { useRef} from 'react';
import filePng from '../assets/file.png';

const acceptStyle = {
  borderColor: '#00ff00',
  color: '#00ff00'
};

const rejectStyle = {
  borderColor: '#ff0000',
  color: '#ff0000'
};

function FileBox(props) {
  console.log(props);

  const ref = useRef();


  const dropHandler = () => {
    ref.current.color = "green";
  }
  
  return (

    <>
      <input className="FileBox" ref={ref} type="file" onDrop={dropHandler}/>
    </>
  )
}

export default FileBox;
