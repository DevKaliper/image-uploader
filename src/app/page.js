"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import FileDropZone from "../components/FileDropZone";
import Loading from "../components/Loading";
export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleFile = (e) => {
    
    const file = e.target.files[0];
    //aquí pueso hacer lo que quiera con el archivo


    console.log(file);
    setLoading(true);
  };


  return (
    <Box
      css={{
        // esto es para centrar el contenido
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}>

        {
          loading ? <Loading setLoading={setLoading}/> :  <Card
        maxW="xl"
        css={{
          // ESta es la tarjeta
          boxShadow:
            "0 0 20px 5px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}>
        <CardBody>
          <Stack
            spacing="3"
            css={{
              textAlign: "center",
              margin: "10px 0",
            }}>
            <Heading size="md">Upload your image</Heading>

            <Text> File should be Jpeg, Png... </Text>
          </Stack>
          <Stack
            mt="6"
            spacing="3">
              {/* ESTE ES EL AREA DE DRAG AND DROP */}
            <FileDropZone />
          </Stack>

          <Text
            textAlign={"center"}
            mt={7}>
            Or
          </Text>
        </CardBody>
        <CardFooter
          css={{
            display: "grid",
            placeItems: "center",
          }}>
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={(e) => handleFile(e)}
          />

          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => document.getElementById("fileInput").click()}>
            Choose a file
          </Button>
        </CardFooter>
      </Card>
        }
      
    </Box>
  )

 
}
