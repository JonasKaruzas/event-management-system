import { useContext, useState } from "react";
import styled from "styled-components"
import deleteImg from "../Assets/Images/delete.svg";
import pencilImg from "../Assets/Images/pencil.svg";
import { AttendeeListContext } from "./AttendeeListState";
import { LoginContext } from "./LoginState";

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  overflow: hidden;
  transition: height 0.2s;

  :nth-child(odd) {
    background-color: #EFF5F5;
  }

  :hover {
    color: #EB6440;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 8px;
    height: 96px;
    
    :hover {
      height: 137px;
    }
  }
`

const Name = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 20px;
  
  @media (max-width: 850px) {
    :before {
      content: 'Name: ';
      font-weight: 400;
    }
  }
`
  
const Email = styled.div`
  flex: 1;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 15px;
  
  @media (max-width: 850px) {
    :before {
      content: 'Email: ';
      font-weight: 400;
    }
  }
`
  
const Age = styled.div`
  font-weight: 600;
  font-size: 15px;
  
  @media (max-width: 850px) {
    :before {
      content: 'Age: ';
      font-weight: 400;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 0px;
  width: 0px;
  overflow: hidden;
  transform: translateX(100px);
  transition: transform 0.3s, width 0.3s;
  
  &.show {
    margin-left: 10px;
    width: 104px;
    transform: translateX(0);
  }
  
  @media (max-width: 850px) {
    width: 104px;
    transform: translateX(0px);
    
    &.show {
      margin-left: 0px;
    }
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
  const {loggedInUser} = useContext(LoginContext);

  return (
    <Card onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
      <Name>{attendee.firstName} {attendee.lastName}</Name>
      <Email>{attendee.email}</Email>
      <Age>{attendee.age}</Age>
      {loggedInUser.type !== 'viewer' && 
        <ButtonContainer className={(hoverState ? ' show' : '')}>
          <Button onClick={() => editAttendee(attendee.id)} edit style={{marginRight: 10}}><img src={pencilImg} alt='edit' /></Button>
          <Button onClick={() => deleteAttendee(attendee.id)} delete><img src={deleteImg} alt='delete' /></Button>
        </ButtonContainer>
      }
    </Card>
  )
}
  