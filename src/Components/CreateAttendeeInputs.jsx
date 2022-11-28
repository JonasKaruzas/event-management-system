import { useRef } from "react";
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  gap: 10px;
  padding-bottom: 60px;
`

const Input = styled.input`
  padding: 10px;
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
`

export function CreateAttendeeInputs() {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const age = useRef();
  
  function submitHandler(e) {
    e.preventDefault();

    const newAttendee = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      age: age.current.value,
    }

    console.log(newAttendee);

    e.target.reset();
  }

  return (
      <Form onSubmit={submitHandler}> 
        <Input ref={firstName} type='text' name='firstName' placeholder="First name" required />
        <Input ref={lastName} type='text' name='lastName' placeholder="Last name" required />
        <Input ref={email} type='email' name='email' placeholder="Email" required />
        <Input ref={age} type='number' name='age' placeholder="Age" required />
        <Button>ADD</Button>
      </Form>
  )
}