import { useRef } from "react";
import styled from "styled-components"
import { useContext } from "react";
import { AttendeeListContext } from "./AttendeeListState";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 60px;

  @media (max-width: 850px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
  }
`

const Input = styled.input`
  padding: 10px;
  width: 160px;
  border: 1px solid #497174;

  &:focus {
    background-color: #EFF5F5;
    outline: none;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
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
  const {addAttendee} = useContext(AttendeeListContext);

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

    addAttendee(newAttendee)
    e.target.reset();
  }

  return (
    <Form onSubmit={submitHandler}> 
      <Input ref={firstName} type='text' name='firstName' placeholder="First name" required />
      <Input ref={lastName} type='text' name='lastName' placeholder="Last name" required />
      <Input ref={email} type='email' name='email' placeholder="Email" required />
      <Input ref={age} type='number' name='age' placeholder="Age" min="14" max="99" required />
      <Button>ADD</Button>
    </Form>
  )
}