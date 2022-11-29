import { createContext, useState } from "react";
export const AttendeeListContext = createContext();

const initialAttendeeState = [
  {id: 1, firstName: 'John', lastName: 'K', email: 'j@k.lt', age: 20},
  {id: 2, firstName: 'Tom', lastName: 'A', email: 't@a.lt', age: 22},
  {id: 3, firstName: 'Dom', lastName: 'B', email: 'd@b.lt', age: 24},
]

export function AttendeeListState({children}) {
  const [attendeeList, setAttendeeList] = useState(initialAttendeeState);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editableAttendee, setEditableAttendee] = useState({});


  function deleteAttendee(id) {
    const newAttendeeList = attendeeList.filter(attendee => attendee.id !== id);
    setAttendeeList(newAttendeeList)
  }
  
  function editAttendee(id) {
    const editableAttendee = attendeeList.find(attendee => attendee.id === id);
    setEditableAttendee(editableAttendee);
    setShowEditModal(true);
    console.log(id);
    console.log(editableAttendee);
  }

  function saveEditableAttendee(Attendee) {
    const indexOfEditableAttendee = attendeeList.findIndex((person) => person.id === editableAttendee.id);
    const newAttendeeList = [...attendeeList];
    newAttendeeList[indexOfEditableAttendee] = Attendee;
    setAttendeeList(newAttendeeList);
    setEditableAttendee(undefined);
  }

  return (
    <AttendeeListContext.Provider value={{attendeeList, setAttendeeList, editAttendee, deleteAttendee, showEditModal, setShowEditModal, editableAttendee, saveEditableAttendee}} >
      {children}
    </AttendeeListContext.Provider>
  )
}