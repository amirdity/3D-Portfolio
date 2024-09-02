import "./adminPanel.scss"
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";

export default function AdminPanel() {
  return (
    <div className="adminPanelChart">
      <div className="AppGlass">
        <Sidebar />
        <MainDash/>
        <div></div>
      </div>
      
    </div>
  );
}
