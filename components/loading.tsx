
"use client"
import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";

export default function App(props: any) {
   
  return (
    <Card className="w-[40vw]">
      <CardBody>
      <Progress
      
      isIndeterminate
      color="success"
      aria-label="Uploading..."
      className="w-full"
    />
      </CardBody>
    </Card>
  );
}
