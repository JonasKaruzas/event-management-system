import { CreateAttendeeInputs } from "./CreateAttendeeInputs";
import { AttendeeList } from "./AttendeeList";
import { AttendeeListItem } from "./AttendeeListItem";

export function Dashboard() {
  return (
    <>
      <div>I am Dashboard</div>
      <CreateAttendeeInputs />
      <AttendeeList>
        <AttendeeListItem />
        <AttendeeListItem />
      </AttendeeList>
    </>
  )
}