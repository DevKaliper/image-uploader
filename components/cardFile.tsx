import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { title } from "./primitives";


export const CardToDropVideo = () => {
  return (
    <Card isBlurred className="h-[60vh] w-[70vw]  xl:w-[25vw] shadow-lg bg-opacity-60">
      <CardHeader className="my-6 flex flex-col gap-2 justify-center items-center">
        <div className="my-2">

        <h4 className={title({ size:"sm"}) }>Image Uploader</h4>
        </div>
        <p className="italic">We accept jpeg & png...</p>
      </CardHeader>
      

      <CardBody>aquí es donde irá la zona de dnd</CardBody>
      <p className="w-full text-center italic">or</p>
      <CardFooter className="grid place-items-center my-4 ">
        <Button
          disableRipple
          className="relative overflow-visible rounded-full bg-background/30 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-background/40 after:!duration-500 after:content-[''] after:transition hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
          size="lg">
          Choose a file
        </Button>
      </CardFooter>
    </Card>
  );
}
