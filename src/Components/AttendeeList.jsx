import styled from "styled-components"
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { SearchAndSort } from "./SearchAndSort";

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;

  @media (max-width: 850px) {
    display: none;
  }
`
  
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 40px;
  color: #497174;

  @media (max-width: 850px) {
    text-align: center;
  }
`

const ListHeader = styled.div`
  font-weight: 500;
  font-size: 15px;
`

export function AttendeeList({children}) {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent}>
      <Title>Attendee list</Title>
      <SearchAndSort />
      <Card>
        <ListHeader>Name</ListHeader>
        <ListHeader>Email</ListHeader>
        <ListHeader>Age</ListHeader>
      </Card>
      {children}
    </div>
  )
}