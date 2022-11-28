export function AttendeeListItem( {attendee} ) {
  return (
    <div>
      <div>{attendee.firstName}</div>
      <div>{attendee.lastName}</div>
      <div>{attendee.email}</div>
      <div>{attendee.age}</div>
    </div>
    )
  }
  