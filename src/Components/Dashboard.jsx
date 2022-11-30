import { CreateAttendeeInputs } from "./CreateAttendeeInputs";
import { AttendeeList } from "./AttendeeList";
import { AttendeeListItem } from "./AttendeeListItem";
import { useContext, useEffect } from "react";
import { AttendeeListContext } from "./AttendeeListState";
import styled from "styled-components";
import { EditModal } from "./EditModal";

const Title = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 40px;
  color: #497174;
`

export function Dashboard() {
  const {attendeeList, setAttendeeList, showEditModal} = useContext(AttendeeListContext);
  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(attendees => setAttendeeList(attendees))
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Title>Management<br />dashboard</Title>
      <CreateAttendeeInputs />
      {attendeeList.length !== 0 ? 
        <AttendeeList>
          {attendeeList.map(attendee => <AttendeeListItem key={attendee.id} attendee={attendee} />)}
        </AttendeeList> :
        <div style={{textAlign: 'center'}}>List is empty</div>
      }
      {showEditModal && <EditModal />}
    </>
  )
}