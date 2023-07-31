
"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { title } from "./primitives";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

import FileDropzone from "./dropZone";

export const CardToDropVideo = (props:any) => {

  const handleFileChoosed = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    uploadImage(file);
    
  }

 async function uploadImage (file: any) {
    if (!file) {
      //si no colocó una imagen
      enqueueSnackbar('Please, select an image', { variant: 'error' });
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
  return (
    <Card isBlurred className="h-[60vh] w-[70vw]  xl:w-[25vw] shadow-lg bg-opacity-60">
      <CardHeader className="my-6 flex flex-col gap-2 justify-center items-center">
        <div className="my-2">

        <h4 className={title({ size:"sm"}) }>Image Uploader</h4>
        </div>
        <p className="italic">We accept jpeg & png...</p>
      </CardHeader>
      

      <CardBody>


        <FileDropzone setLoading={props.setLoading} setUrl={props.setUrl}/>{/* ZONA DEL DRAG AN DROP  */}
        
      </CardBody>
      <p className="w-full text-center italic">or</p>
      <CardFooter className="grid place-items-center my-4 ">
        {/* PARA SELECIONAR EL ARCHIVO MANUALMENTE */}
        <input type="file" hidden id="FileInput" onChange={e => handleFileChoosed(e)} />
        <Button
          disableRipple
          onPress={() => document.getElementById("FileInput")?.click()}
          className="relative overflow-visible rounded-full bg-background/30 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-background/40 after:!duration-500 after:content-[''] after:transition hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
          size="lg">
          Choose a file
        </Button>
      </CardFooter>
    </Card>
  );
}
