import { useContext, useState } from "react";
import styled from "styled-components"
import deleteImg from "../Assets/Images/delete.svg";
import pencilImg from "../Assets/Images/pencil.svg";
import { AttendeeListContext } from "./AttendeeListState";

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  overflow: hidden;

  :nth-child(odd) {
    background-color: #EFF5F5;
  }

  :hover {
    color: #EB6440;
  }
`

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
`

const Email = styled.div`
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 15px;
`

const Age = styled.div`
  font-weight: 600;
  font-size: 15px;
`

const ButtonContainer = styled.div`
    opacity: 0;
    transform: translateX(100px);
    transition: opacity 0.3s, transform 0.3s;
    
    &.show {
     opacity: 1;
     transform: translateX(0);
   }
`

const Button = styled.button`
  border: none;
  background-color: ${props => props.delete && '#EB6440'};
  background-color: ${props => props.edit && '#497174'};
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.8;
  
  :hover {
    opacity: 1;
  }

  img {
    filter: invert(1);
    // padding: 2px;
    height: 28px;
    width: 35px;
  }
`

export function AttendeeListItem( {attendee} ) {
  const [hoverState, setHoverState] = useState(false);
  const {editAttendee, deleteAttendee} = useContext(AttendeeListContext);

  return (
    <Card onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
      <Name>{attendee.firstName} {attendee.lastName}</Name>
      <Email>{attendee.email}</Email>
      <Age>{attendee.age}</Age>
      <ButtonContainer className={(hoverState ? ' show' : '')}>
        <Button onClick={() => editAttendee(attendee.id)} edit style={{marginRight: 10}}><img src={pencilImg} alt='edit' /></Button>
        <Button onClick={() => deleteAttendee(attendee.id)} delete><img src={deleteImg} alt='delete' /></Button>
      </ButtonContainer>
    </Card>
    )
  }
  