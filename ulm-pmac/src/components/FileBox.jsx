import React,  {useRef, useState} from 'react';

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
  const fileInput = useRef(null);

  const [files, setFiles] = useState([]);
  
  return (

    <>
      <form method='post' encType='mulitpart/form-data'>
        <input 
        className='FileBox'
        ref={fileInput} 
        type='file'
        title=''
        value=''
        />
        <div>
          <input 
          type='submit' 
          value='Save file' 
          style={{position:'relative', top:'-75px', left:'2.2in'}}/>
        </div>
        <div>
          <input 
          type='reset'  
          style={{position:'relative', top:'-75px', left:'2.2in'}}/>
        </div>
      </form>
    </>
  );
};

export default FileBox;
