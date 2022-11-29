import { useContext } from "react";
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

export function EditModal() {
  const {setShowEditModal} = useContext(AttendeeListContext);
  return ReactDOM.createPortal(
    <Modal>
      <Overlay onClick={() => setShowEditModal(false)}></Overlay>
      <Content>
        <h2>Modal</h2>
        <button onClick={() => setShowEditModal(false)}>Close</button>
      </Content>
    </Modal>,
    document.getElementById('portal')
  )
}