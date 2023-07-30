

const { Card, CardBody, Text, CircularProgress } = require("@chakra-ui/react")

const Loading = ({setLoading}) => {
    setInterval(()=>{
        setLoading(false)
    }, 5000)
    return(
        <Card>
  <CardBody>
  <CircularProgress isIndeterminate color='green.300' />
  </CardBody>
</Card>
    )
    
}

export default Loading