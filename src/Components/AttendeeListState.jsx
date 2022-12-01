import { createContext, useState } from "react";
export const AttendeeListContext = createContext();

export function AttendeeListState({children}) {
  const [attendeeList, setAttendeeList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editableAttendee, setEditableAttendee] = useState({});
  const [loadingData, setLoadingData] = useState(false);

  async function addAttendee(Attendee) {
    const response = await fetch(`/attendees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Attendee),
    })  
    const attendees = await response.json();
    setAttendeeList(attendees);
  }

  async function deleteAttendee(id) {
    const response = await fetch(`/attendees/${id}`, {
      method: 'DELETE',
    })  
    
    const attendees = await response.json();
    setAttendeeList(attendees);
  }
  
  function editAttendee(id) {
    const editableAttendee = attendeeList.find(attendee => attendee.id === id);
    setEditableAttendee(editableAttendee);
    setShowEditModal(true);
  }

  async function saveEditableAttendee(Attendee) {
    const response = await fetch(`/attendees/${Attendee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Attendee),
    })  
    const attendees = await response.json();
    setAttendeeList(attendees);
  }
  

  const values = {
    attendeeList, 
    setAttendeeList,
    addAttendee, 
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