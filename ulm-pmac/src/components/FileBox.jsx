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

  }

  const resetHandler = () => {

  }
  
  return (

    <>
      <form ref={ref}>
        <input className="FileBox" id="fileBox" type="file" onDrop={dropHandler} accept='img/*'/>
        <div>
          <input type="submit" value="Save file"  style={{position:"relative", top:"-75px", left:"2in"}}/>
        </div>
        <div>
          <input type="reset"  style={{position:"relative", top:"-75px", left:"2in"}} onclick={resetHandler}/>
        </div>
      </form>
    </>
  )
}

export default FileBox;
