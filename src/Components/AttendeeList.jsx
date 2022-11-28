import styled from "styled-components"

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 5px;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 40px;
  color: #497174;
`

const ListHeader = styled.div`
  font-weight: 500;
  font-size: 15px;
`

export function AttendeeList({children}) {
  return (
    <>
      <Title>Attendee list</Title>
      <Card>
        <ListHeader>Name</ListHeader>
        <ListHeader>Email</ListHeader>
        <ListHeader>Age</ListHeader>
      </Card>
        {children}
    </>
  )
}