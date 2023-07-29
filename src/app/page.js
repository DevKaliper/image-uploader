
"use client"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',

    }}>


    <Card maxW='sm' css={{
      boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    }} >
  <CardBody>
    <Stack spacing='3' css={{
      textAlign: 'center', 
      margin: "10px 0"
    }}>
      <Heading size='md' >Upload your image</Heading>

      <Text> File should be Jpeg, Png... </Text>
</Stack>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text>
        ------&gt;AQUÍ IRA EL DRAG AND DROP&lt;------
      </Text>
  
    </Stack>


    <Text textAlign={"center"} mt={7}>Or</Text>

  </CardBody>
  <CardFooter css={{
    display: 'grid',
    placeItems: 'center',
  }}>

      <Button variant='solid' colorScheme='blue'>
        Choose a file
      </Button>
     
   
  </CardFooter>
</Card>

    </Box>

  )
}
