import { useContext, useState } from "react"
import styled from "styled-components"
import { LoginContext } from "./LoginState"

const Title = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 40px;
  color: #497174;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 60px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  }
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
`

const Button = styled.button`
  padding: 12px;
  background-color: #EB6440;
  border: none;
  border-radius: 5px;
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 600;
  cursor: pointer; 

  :hover {
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px 0px #a4a4a430;
  }
  
  :active {
    transform: translateY(0px);
    box-shadow: none;
  }

  &.small {
    opacity: .5;
    padding: 6px 12px; 
    
    :hover {
      opacity: 1;

    }
  }

`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
`

export function Login() {
  const [loginInfo, setLoginInfo] = useState({username: '', password: ''});
  const {login, isLoginFailed} = useContext(LoginContext);

  function submitHandler(e) {
    e.preventDefault();
    login(loginInfo);
    e.target.reset();
  }

  return (
    <>
    <Title>Welcome to the event<br />management system</Title>
      <Form onSubmit={(e) => submitHandler(e)}> 
        <Input value={loginInfo.username} onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value})} type='text' name='username' placeholder="Username" required />
        <Input value={loginInfo.password} onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})} type='password' name='password' placeholder="Password" required />
        <Button>LOG IN</Button>
        {isLoginFailed && <div style={{color: 'red'}}>Login failed</div>}
      </Form>
        <p style={{textAlign: 'center'}}>Login as</p>
        <Buttons>
          <Button onClick={() => setLoginInfo({username: 'admin', password: 'Adm1n!'})} className="small">Admin</Button>
          <Button onClick={() => setLoginInfo({username: 'editor', password: 'Ed1tor!'})} className="small">Editor</Button>
          <Button onClick={() => setLoginInfo({username: 'viewer', password: 'V1ewer!'})} className="small">Viewer</Button>
        </Buttons>
    </>
  )
}