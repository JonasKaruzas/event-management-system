import { useRef } from "react"
import styled from "styled-components"

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

export function Login() {

  const username = useRef();
  const password = useRef();

  function submitHandler() {
    console.log('submit');
    console.log(username);
    console.log(password);
  }

  return (
    <>
    <Title>Welcome to the event<br />management system</Title>
      <Form onSubmit={submitHandler}> 
        <Input ref={username} type='text' name='username' placeholder="Username" required />
        <Input ref={password} type='text' name='password' placeholder="Password" required />
        <Button>LOG IN</Button>
        <p style={{marginBottom: 0, textAlign: 'center'}}>Login as</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button className="small">Admin</Button>
          <Button className="small">Editor</Button>
          <Button className="small">Viewer</Button>
        </div>
      </Form>

    </>
  )
}