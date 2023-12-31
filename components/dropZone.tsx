import React from 'react';
import { useDropzone } from 'react-dropzone';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


const FileDropzone = (props: any) => {
  const onDrop = async (acceptedFiles: any) => {
    const file = acceptedFiles[0]
    if (!file) {
      //si no colocó una imagen
      enqueueSnackbar("Please, select an image.", { variant: 'error' });
      return;
    }
    
    //Se instancia el formData
    const formData = new FormData();
    if (file) {
      //si se colocó la imagen se comienza la animación de carga
      props.setLoading(true)
      const blob = new Blob([file], { type: file.type });
      formData.append('image', blob, file.name); // Agregamos el nombre del archivo
    }

    //Se realiza la petición al servidor
    try {
      const response = await fetch("https://imp-uploader-dev-kaliper.onrender.com/upload", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al cargar la imagen.');
      }

      //Data será la url que manda el servidor
      const data = await response.text();

      setTimeout(() => {
        //coloco la url
        props.setUrl(data)
        //quito el cargando
        props.setLoading(false)
      }, 3000);
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
      props.setLoading(false)
  
      enqueueSnackbar("Error trying to upload file", { variant: 'error' });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop }); // Aquí se configura el dropzone

  return (
    <div {...getRootProps()}  className='border-2 border-dashed border-gray-500 dark:border-white h-full grid place-items-center rounded-xl mb-4 p-5 text-center'>
      <SnackbarProvider />
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
