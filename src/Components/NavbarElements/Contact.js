import { Card, CardBody, CardTitle, Col, Container,Row } from "reactstrap"

const Contact = () =>{
    return(
    <Container>
        <h3 style={{borderBottom:"2px solid #f03c02",marginTop:20}}>Contact Us?</h3>
        <p>We welcome you to contact us for any information. Please feel free to contact us.</p> 
        <Row>
        
            
            <Col>
            <Card style={{marginBottom:20}}>
                <CardBody>
                <CardTitle tag="h4">PLACEMENT OFFICER</CardTitle>
            <p>Prof.M.Sri Murali</p>
            <p>SVU College of Engineering, Tirupati, A.P</p>
            <p>+91-9603078920</p>
            <a href="mailto:plcmnt_svuce@yahoo.co.in">plcmnt_svuce@yahoo.co.in</a><br/>
            <a href="mailto:msrimurali@gmail.com">msrimurali@gmail.com</a>
           
                </CardBody>
            
            </Card>
            
        
              
            </Col>
            <Col>
            <Card>
              {/*  <CardBody>
                <CardTitle tag="h4">
                Technical Information
                </CardTitle>
                <p>Officer-In-Charge</p>
            <p>College Computer Centre</p>
            <p>SVU College of Engineering,Tirupati, A.P,517502</p>
            <p>+91-877-2289561</p>
            <a href="mailto:svucewdc@gmail.com">svucewdc@gmail.com</a>
                </CardBody>
              */}
                
            </Card>
            
        
              
            </Col>
        </Row>
    </Container>
    )
}
export default Contact