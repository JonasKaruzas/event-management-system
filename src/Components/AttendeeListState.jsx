import { createContext, useState } from "react";

export const AttendeeListContext = createContext();

const initialAttendeeState = [
  {id: 1, firstName: 'John', lastName: 'K', email: 'j@k.lt', age: 20},
  {id: 2, firstName: 'Tom', lastName: 'A', email: 't@a.lt', age: 22},
  {id: 3, firstName: 'Dom', lastName: 'B', email: 'd@b.lt', age: 24},
]

export function AttendeeListState({children}) {
  const [attendeeList, setAttendeeList] = useState(initialAttendeeState);

  function deleteAttendee(id) {
    const newAttendeeList = attendeeList.filter(attendee => attendee.id !== id);
    setAttendeeList(newAttendeeList)
  }

  function editAttendee(id) {
    console.log(id);
  }

  return (
    <AttendeeListContext.Provider value={{attendeeList, setAttendeeList, editAttendee, deleteAttendee}} >
      {children}
    </AttendeeListContext.Provider>
  )
}