import { createContext, useState } from "react";
export const LoginContext = createContext();

export function LoginState({children}) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoginFailed, setIsLoginFailed] = useState(false);
 
  async function login(user) {
    const response = await fetch(`/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })  

    if (response.status === 401) {
      setIsLoginFailed(true);
      return;
    } 

    const data = await response.json()
    setLoggedInUser(data);
  }
    
  const values = {
    loggedInUser,
    setLoggedInUser,
    login,
    isLoginFailed,
  }  

  return (
    <LoginContext.Provider value={values} >
      {children}
    </LoginContext.Provider>
  )
}
