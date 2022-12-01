import { createContext, useState } from "react";
export const AttendeeListContext = createContext();

export function AttendeeListState({children}) {
  const [attendeeList, setAttendeeList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editableAttendee, setEditableAttendee] = useState({});
  const [loadingData, setLoadingData] = useState(false);

  function deleteAttendee(id) {
    const newAttendeeList = attendeeList.filter(attendee => attendee.id !== id);
    setAttendeeList(newAttendeeList)
  }
  
  function editAttendee(id) {
    const editableAttendee = attendeeList.find(attendee => attendee.id === id);
    setEditableAttendee(editableAttendee);
    setShowEditModal(true);
  }

  function saveEditableAttendee(Attendee) {
    const indexOfEditableAttendee = attendeeList.findIndex((person) => person.id === editableAttendee.id);
    const newAttendeeList = [...attendeeList];
    newAttendeeList[indexOfEditableAttendee] = Attendee;
    setAttendeeList(newAttendeeList);
    setEditableAttendee(undefined);
  }

  const values = {
    attendeeList, 
    setAttendeeList, 
    editAttendee, 
    deleteAttendee, 
    showEditModal, 
    setShowEditModal, 
    editableAttendee, 
    saveEditableAttendee, 
    loadingData, 
    setLoadingData,
  }  

  return (
    <AttendeeListContext.Provider value={values} >
      {children}
    </AttendeeListContext.Provider>
  )
}