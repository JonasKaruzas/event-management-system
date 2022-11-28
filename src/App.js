import { Dashboard } from "./Components/Dashboard";
import { AttendeeListState } from "./Components/AttendeeListState";

export function App() {
  return (
    <AttendeeListState>
      <Dashboard />;
    </AttendeeListState>
  );
}
