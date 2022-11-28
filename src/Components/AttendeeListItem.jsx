import styled from "styled-components"

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 5px;

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



export function AttendeeListItem( {attendee} ) {
  return (
    <Card>
      <Name>{attendee.firstName} {attendee.lastName}</Name>
      <Email>{attendee.email}</Email>
      <Age>{attendee.age}</Age>
    </Card>
    )
  }
  