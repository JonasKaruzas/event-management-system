import { Dashboard } from "./Components/Dashboard";
import { AttendeeListState } from "./Components/AttendeeListState";
import "./Assets/Styles/App.css";

export function App() {
  return (
    <AttendeeListState>
      <Dashboard />;
    </AttendeeListState>
  );
}
