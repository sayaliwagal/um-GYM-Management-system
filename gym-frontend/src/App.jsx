import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/auth/Login.jsx";
import Dashboard from "../src/admin/Dashboard.jsx";
import MemberDashboard from "../src/member/Dashboard.jsx";
import Navbar from "../src/components/Navbar.jsx";
import AddMember from "../src/admin/AddMember.jsx";
import Bills from "../src/admin/Bills.jsx";
import Members from "../src/admin/Members.jsx";
import Notifications from "../src/admin/Notification.jsx";
// import Export from "../src/admin/Export";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add-member" element={<AddMember />} />
        <Route path="/admin/members" element={<Members />} />
        <Route path="/admin/bills" element={<Bills />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        {/* <Route path="/admin/export" element={<Export />} /> */}

        {/* MEMBER */}
        <Route path="/member" element={<MemberDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
