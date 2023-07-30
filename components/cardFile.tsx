import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

export const CardToDropVideo = () => {
  return (
    <Card>
      <CardHeader>
        <h4>Image Uploader</h4>
        <p>We accept jpeg & png...</p>
      </CardHeader>

      <CardBody>aquí es donde irá la zona de dnd</CardBody>
      <CardFooter>
        <Button
          disableRipple
          className="relative overflow-visible rounded-full bg-background/30 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-background/40 after:!duration-500 after:content-[''] after:transition hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
          size="lg">
          Upload
        </Button>
      </CardFooter>
    </Card>
  );
}
