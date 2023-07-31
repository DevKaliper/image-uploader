import React from 'react';
import { useDropzone } from 'react-dropzone';
import service from '../service/service';

const FileDropzone = (props: any) => {
  const onDrop = async (acceptedFiles: any) => {
   console.log(acceptedFiles)
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
