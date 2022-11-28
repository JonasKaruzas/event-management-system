import { CreateAttendeeInputs } from "./CreateAttendeeInputs";
import { AttendeeList } from "./AttendeeList";
import { AttendeeListItem } from "./AttendeeListItem";
import { useContext } from "react";
import { AttendeeListContext } from "./AttendeeListState";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 40px;
  color: #497174;
`

export function Dashboard() {
  const {attendeeList, setAttendeeList} = useContext(AttendeeListContext);

  return (
    <>
      <Title>Management<br />dashboard</Title>
      <CreateAttendeeInputs />
      <AttendeeList>
        {attendeeList.map(attendee => <AttendeeListItem key={attendee.id} attendee={attendee} />)}
      </AttendeeList>
    </>
  )
}