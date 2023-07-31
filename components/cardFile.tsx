
"use client"
import React, { ChangeEvent } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { title } from "./primitives";
import FileDropzone from "./dropZone";


export const CardToDropVideo = (props:any) => {
  const handleFileChoosed = (event: ChangeEvent ) => {
    const a = event.target as HTMLInputElement; // para que no se queje el typescript
    const fileToUpload = a.files?.item(0); 
    // aqui puedo manejar el archivo que se seleccionó
    console.log(fileToUpload);
    props.setLoading(true); // para que se muestre el loading

    
  }
  return (
    <Card isBlurred className="h-[60vh] w-[70vw]  xl:w-[25vw] shadow-lg bg-opacity-60">
      <CardHeader className="my-6 flex flex-col gap-2 justify-center items-center">
        <div className="my-2">

        <h4 className={title({ size:"sm"}) }>Image Uploader</h4>
        </div>
        <p className="italic">We accept jpeg & png...</p>
      </CardHeader>
      

      <CardBody>


        <FileDropzone setLoading={props.setLoading}/>{/* ZONA DEL DRAG AN DROP  */}
        
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
