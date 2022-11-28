import { Dashboard } from "./Components/Dashboard";
import { AttendeeListState } from "./Components/AttendeeListState";
import "./Assets/Styles/App.css";

export function App() {
  return (
    <AttendeeListState>
      <div className="app">
        <Dashboard />
      </div>
    </AttendeeListState>
  );
}
