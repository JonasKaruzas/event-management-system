import { useEffect } from "react";
import { createContext, useState } from "react";
export const AttendeeListContext = createContext();

export function AttendeeListState({children}) {
  const [attendeeList, setAttendeeList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editableAttendee, setEditableAttendee] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [sortInput, setSortInput] = useState('');
  const [searchedAndSortedList, setSearchedAndSortedList] = useState(attendeeList);

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

  function sortList(sortInput, searchResult) {
    switch (sortInput) {
      case 'name-asc':
        return searchResult.sort((item1, item2) => (item1.firstName < item2.firstName) ? 1 : (item1.firstName > item2.firstName) ? -1 : 0);
        case 'name-desc':
          return searchResult.sort((item1, item2) => (item1.firstName > item2.firstName) ? 1 : (item1.firstName < item2.firstName) ? -1 : 0);
          case 'age-asc':
        return searchResult.sort((item1, item2) => (item1.age < item2.age) ? 1 : (item1.age > item2.age) ? -1 : 0);
        case 'age-desc':
          return searchResult.sort((item1, item2) => (item1.age > item2.age) ? 1 : (item1.age < item2.age) ? -1 : 0);
      default:
        return searchResult;
    }
  }

  useEffect(() => {
    const searchResult = attendeeList.filter(
      attendee => (attendee.firstName.toLowerCase() + attendee.lastName.toLowerCase()).includes(searchInput.toLowerCase()))
    const sortedList = sortList(sortInput, searchResult);
    setSearchedAndSortedList(sortedList);
  },[attendeeList, searchInput, sortInput])

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
    searchInput, 
    setSearchInput,
    sortInput, 
    setSortInput,
    searchedAndSortedList,
  }  

  return (
    <AttendeeListContext.Provider value={values} >
      {children}
    </AttendeeListContext.Provider>
  )
}