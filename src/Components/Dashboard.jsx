import { CreateAttendeeInputs } from "./CreateAttendeeInputs";
import { AttendeeList } from "./AttendeeList";
import { AttendeeListItem } from "./AttendeeListItem";
import { useContext, useEffect } from "react";
import { AttendeeListContext } from "./AttendeeListState";
import styled from "styled-components";
import { EditModal } from "./EditModal";
import {ScaleLoader} from "react-spinners";

const Title = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 40px;
  color: #497174;
`

export function Dashboard() {
  const {attendeeList, setAttendeeList, showEditModal, loadingData, setLoadingData} = useContext(AttendeeListContext);

  useEffect(() => {
    setLoadingData(true);
    fetch('/users')
    .then(res => res.json())
    .then(attendees => {
      setLoadingData(false);
      setAttendeeList(attendees)})
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Title>Management<br />dashboard</Title>
      <CreateAttendeeInputs />
      {(attendeeList.length === 0 ) ? 
        <div style={{textAlign: 'center'}}>List is empty</div> :
        <AttendeeList>
          {loadingData ?
          <div style={{textAlign: 'center', marginTop: 20}}>
            <ScaleLoader color={'#497174'} /> 
          </div> :
            attendeeList.map(attendee => <AttendeeListItem key={attendee.id} attendee={attendee} />)
          }
        </AttendeeList> 
      }
      {showEditModal && <EditModal />}
    </>
  )
}