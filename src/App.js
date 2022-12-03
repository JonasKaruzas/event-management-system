import { Dashboard } from "./Components/Dashboard";
import { AttendeeListState } from "./Components/AttendeeListState";
import { LoginContext } from "./Components/LoginState";
import "./Assets/Styles/App.css";
import { Login } from "./Components/Login";
import { useContext } from "react";

export function App() {
  const { loggedInUser } = useContext(LoginContext);

  return (
    <AttendeeListState>
      {Object.keys(loggedInUser).length === 0 ? (
        <Login />
      ) : (
        <div className="app">
          <Dashboard />
        </div>
      )}
    </AttendeeListState>
  );
}
