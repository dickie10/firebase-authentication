
import Signup from "./components/Signup"
import { Container } from "react-bootstrap" 
function App() {
  return (   
    <Container className="d-flex align-items-center" style={{minHeight: "100vh"}}> 
    <div className="w-100" style={{maxwidth:"400px"}}>
      <Signup /> 
    </div>
    </Container> 
  );
}

export default App;
