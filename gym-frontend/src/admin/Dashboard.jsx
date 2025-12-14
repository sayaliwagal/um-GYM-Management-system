import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const exportReport = () => {
  window.open("http://localhost:5000/api/bills/export");
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <button
          onClick={() => navigate("/admin/add-member")}
          className="bg-slate-800 text-white p-6 rounded-lg hover:bg-slate-900"
        >
          ➕ Add Member
        </button>

        <button
          onClick={() => navigate("/admin/members")}
          className="bg-slate-800 text-white p-6 rounded-lg hover:bg-slate-900"
        >
          👥 View / Update Members
        </button>

        <button
          onClick={() => navigate("/admin/bills")}
          className="bg-slate-800 text-white p-6 rounded-lg hover:bg-slate-900"
        >
          💳 Create / View Bills
        </button>

        <button
          onClick={() => navigate("/admin/notifications")}
          className="bg-slate-800 text-white p-6 rounded-lg hover:bg-slate-900"
        >
          🔔 Monthly Notifications
        </button>

<button
  onClick={exportReport}
  className="bg-black text-white px-4 py-2 rounded mt-4"
>
  Export Bills Report
</button>


      </div>
    </div>
  );
}

export default Dashboard
