import { useContext, useState } from "react";
import ReactDOM from "react-dom"
import styled from "styled-components";
import { AttendeeListContext } from "./AttendeeListState";

const Modal = styled.div`
  display : flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: blur(2px);
`

const Content = styled.div`
  background-color: white;
  z-index: 2;
  padding: 32px;
  box-shadow: 0 1px 12px rgba(0,0,0,0.5);
  border-radius: 8px
`
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


export function EditModal() {
  
  const {setShowEditModal, editableAttendee, saveEditableAttendee} = useContext(AttendeeListContext);
    const [formData, setFormData] = useState(editableAttendee);

  function submitHandler(e) {
    e.preventDefault();
    saveEditableAttendee(formData);
    setShowEditModal(false);
  }
  

  return ReactDOM.createPortal(
    <Modal>
      <Overlay onClick={() => setShowEditModal(false)}></Overlay>
      <Content>
        <h2>Edit attendee</h2>
        <Form onSubmit={submitHandler}> 
          <Input type='text' name='firstName' value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
          <Input type='text' name='lastName' value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
          <Input type='email' name='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          <Input type='number' name='age' min="14" max="99" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} required />
          <Button>Save</Button>
        </Form>
      </Content>
    </Modal>,
    document.getElementById('portal')
  )
}