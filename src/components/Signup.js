import React, { useRef,useState } from 'react' 
import {Form,Button,Card} from 'react-bootstrap' 
import { signup,useAuth,logout,login } from '../firebase' 

const Signup = () => { 
    const emailRef = useRef() 
    const passwordRef = useRef() 
    const [val,setval] = useState(false) 
    const currentUser = useAuth()
    async function handleSubmit(e){   
        e.preventDefault(); 
        setval(true)
        try{ 
            await signup(emailRef.current.value,passwordRef.current.value); 
        } catch{ 
            alert("id already in use");
        }  
        setval(false)
    } 
    async function handlelogout(){ 
        try{ 
            await logout();
        } catch { 
            alert("Error");
        }
    }  
    async function handlelogin(e){ 
        e.preventDefault(); 
        setval(true) 
        try{ 
            await login(emailRef.current.value,passwordRef.current.value);
        } catch{ 
            alert("error while log in"); 
        } 
        setval(false)
    }
    return (
        <div> 
            <h2>Currently logged in as: {currentUser?.email}</h2>
            <Card>  
                <Card.Body> 
                    <h2 className="text-center mb-4">Sign Up</h2> 
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label> 
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group> 
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label> 
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group> 
                        <Button className="w-100" type="submit" disabled={  val ||currentUser != null} onClick={handleSubmit}>Sign Up</Button> 
                        <Button className="w-100" type="submit" onClick={handlelogout}>Logout</Button> 
                        <Button className="w-100" type="submit" disabled={ val || currentUser != null} onClick={handlelogin}>login</Button> 
                    </Form>
                </Card.Body>
            </Card> 
            <div className="w-100 text-center mt-2">
                Already  account ? Log In
            </div>
        </div>
    )
}

export default Signup
