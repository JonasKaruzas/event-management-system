import { createContext, useState } from "react";
export const LoginContext = createContext();

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = newValue => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
  
export function LoginState({children}) {
  const [loggedInUser, setLoggedInUser] = useLocalStorage('EMSUser',{});
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
    setIsLoginFailed(false);
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
