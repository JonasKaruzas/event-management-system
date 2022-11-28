import { useRef } from "react";

export function CreateAttendeeInputs() {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const age = useRef();
  
  function submitHandler(e) {
    e.preventDefault();

    const newAttendee = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      age: age.current.value,
    }

    console.log(newAttendee);

    e.target.reset();
  }

  return (
      <form onSubmit={submitHandler}> 
        <input ref={firstName} type='text' name='firstName' placeholder="First name" required />
        <input ref={lastName} type='text' name='lastName' placeholder="Last name" required />
        <input ref={email} type='email' name='email' placeholder="Email" required />
        <input ref={age} type='number' name='age' placeholder="Age" required />
        <button>Submit</button>
      </form>
  )
}