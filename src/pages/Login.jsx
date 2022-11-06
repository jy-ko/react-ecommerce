import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${props => props.disabled ? "purple" : "teal" };
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading ] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);

  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <span className="user">{user.name}</span>
        <Form>
          <Input type="text" placeholder="username" value={username} onChange={e=> setUsername(e.target.value)}  />
          <Input type="password" placeholder="password"value={password} onChange={e=> setPassword(e.target.value)}  />
          <Button onClick={handleClick} disabled={!username || !password}>
            { loading ? "please wait" : "login"}
          </Button>
          <span data-testid="error" style={{visibility: error ? "visible" : "hidden"}}>Something went wrong:(</span>
          <Link>CREATE A NEW ACCOUNT</Link>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
