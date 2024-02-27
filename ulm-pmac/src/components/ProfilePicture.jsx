import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    height: '25px',
    width: '25px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    borderRadius: '50%',
    display: 'inline-block',
    flexDirection: 'column',
    padding: '20px',
    borderWidth: 2,
    borderColor: '#840029',
    borderStyle: 'solid',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
    overflow: 'hidden'
};

const pictureStyle = {
    height: '100px',
    position: 'relative',
    left: '0px',
    top: '0px'
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
<p>{coords.x}</p>
    <div {...getRootProps({style})}>
    <input {...getInputProps()} />
    <span id='image' >{image}</span>
    </div>
</>
)
}

export default ProfilePicture


