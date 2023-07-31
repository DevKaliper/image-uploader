import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const App = (props: any) => {
  return (
    <div className="flex flex-col  justify-center items-center">
      <Card className="relative -top-12 col-span-12 h-[550px] w-[500px]  sm:col-span-7 2xl:-top-16">
        <CardHeader className="absolute top-0 z-10 h-fit w-full flex-col items-start backdrop-blur-2xl">
          <p className="text-tiny font-bold uppercase text-white/60">
            Its Done!
          </p>
          <h4 className="text-xl font-medium text-white/90">
            Your Image was uploaded succesfully
          </h4>
        </CardHeader>
        <Image
          width={5000}
          height={550}
          alt="image uploaded"
          className="z-0 h-full w-full object-cover"
          src={props.url}
        />
        <CardFooter
          className="absolute bottom-0 left-0 z-10   border-t-1 border-default-600 bg-black/40 backdrop-blur-2xl dark:border-default-100">
          <div className="flex flex-grow items-center gap-2">
            <div className="flex h-fit w-full flex-col items-center justify-center gap-2">
              <Snippet
                variant="shadow"
                hideSymbol
                classNames={{
                  copyButton: "absolute left-1"
                }}
                
                className="relative max-w-md pl-10 font-bold whitespace-nowrap overflow-hidden text-ellipsis dark:bg-green-900 ">
                                  {props.url}
              </Snippet>
              <Button className="dark:bg-green-900">
                <Link
                  isBlock
                  isExternal
                  showAnchorIcon
                  
                  href={props.url}
                  className="h-fit w-full"
                  color="foreground">
                  See it
                </Link>
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Button>

      <Link isBlock color="foreground" href="/">Home</Link>
      </Button>
    </div>
  );
};

export default App;
