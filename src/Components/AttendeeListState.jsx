import { createContext, useState } from "react";
export const AttendeeListContext = createContext();

export function AttendeeListState({children}) {
  const [attendeeList, setAttendeeList] = useState([]);
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