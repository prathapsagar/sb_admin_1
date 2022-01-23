import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  let data = [
    {
      monthly: "40000",
      Annual: "125,0000",
      Tasks: "50",
      Pending_tasks: "18",
    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Dashboard data={data[0]} />
      </div>
    </div>
  );
}

export default App;
