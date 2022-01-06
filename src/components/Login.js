import React, { useRef } from 'react'
import {Form,Button,Card} from 'react-bootstrap'  
import { Container } from "react-bootstrap"  

export const Login = () => {  
    const emailRef = useRef() 
    const passwordRef = useRef() 

    return ( 
        <Container className="d-flex align-items-center" style={{minHeight: "100vh"}}>
        <div >
            <Card> 
                <Card.Body>
                    <h2 className="text-center mb-4">Login in</h2> 
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label> 
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group> 
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label> 
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group> 
                        <Button className="w-100" type="submit">Login in</Button>
                    </Form>
                </Card.Body>
            </Card> 
        </div> 
        </Container> 
    )
}

 