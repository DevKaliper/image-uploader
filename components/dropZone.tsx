import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropzone = (props: any) => {
  const onDrop = (acceptedFiles: any) => {
    props.setLoading(true); // para que se muestre el loading
    // Aquí puedo manejar los archivos que se arrastraron y soltaron con 'acceptedFiles'
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop }); // Aquí se configura el dropzone

  return (
    <div {...getRootProps()}  className='border-2 border-dashed border-gray-500 dark:border-white h-full grid place-items-center rounded-xl mb-4 p-5 text-center'>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Drag & drop your image here.</p>
      )}
    </div>
  );
};

export default FileDropzone;
