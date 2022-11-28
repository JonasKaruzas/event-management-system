import { CreateAttendeeInputs } from "./CreateAttendeeInputs";
import { AttendeeList } from "./AttendeeList";
import { AttendeeListItem } from "./AttendeeListItem";
import { useContext } from "react";
import { AttendeeListContext } from "./AttendeeListState";

export function Dashboard() {
  const {attendeeList, setAttendeeList} = useContext(AttendeeListContext);

  return (
    <>
      <div>I am Dashboard</div>
      <CreateAttendeeInputs />
      <AttendeeList>
        {attendeeList.map(attendee => <AttendeeListItem key={attendee.id} attendee={attendee} />)}
      </AttendeeList>
    </>
  )
}