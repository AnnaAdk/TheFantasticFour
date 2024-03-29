import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import profileImagePlaceholder from '../assets/profilePicturePlaceholder.png';

const baseStyle = {
    height: '50px',
    width: '50px',
    position: 'relative',
    marginLeft: 'auto',
    top: '0px',
    right: '0px',
    borderRadius: '50%',
    display: 'inline-block',
    flexDirection: 'column',
    padding: '20px',
    borderWidth: 2,
    borderColor: 'aliceblue',
    borderStyle: 'solid',
    backgroundColor: 'aliceblue',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
    overflow: 'hidden'
};

const pictureStyle = {
    width: '100px',
    position: 'absolute',
    left: '0px',
    top: '0px',
    
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#0fff0f'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function ProfilePicture(props) {
const [files, setFiles] = useState([]);
const [coords, setCoords] = useState({x: 0, y:0});

const onDrop = useCallback(acceptedFiles => {
setFiles(acceptedFiles.map(file => Object.assign(file, {
    preview: URL.createObjectURL(file)
})));
}, []);

const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
} = useDropzone({
onDrop,
accept: {   'image/*' : [],}
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

const image = files.map(file => (
    
    <img
    src={file.preview}
    key={file.name}
    {...pictureStyle}
    />
    
));

useEffect(() => () => {
files.forEach(file => URL.revokeObjectURL(file.preview));
}, [files]);


// hope to use this to be able to move pfp in the future
useEffect(() => {
    const getCoords = e => {
        setCoords({
            x: e.clientX,
            y: e.clientY,
        });
    };
    window.addEventListener('mousemove', getCoords);

    return () => {
        window.removeEventListener(
          'mousemove',
          getCoords,
        );
      };

}, []);

return (
<>
    <div {...getRootProps({style})}>
    <input {...getInputProps()} />
    <img src={profileImagePlaceholder} style={{position: 'absolute', top: '-39px', left:'-27px', width:'150px'}} />
    <div style={{position: 'absolute', color: 'aliceblue' ,textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', top: '8px', left:'22.5px', fontSize:'12pt'}}>Drop<br />image<br />here</div>
    <div id='image' style={{position: 'absolute', left:'-5px', top:'-5px' }}>{image}</div>
    </div>
    
</>
);
}

export default ProfilePicture;


