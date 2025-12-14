import { useEffect, useState } from "react";
import API from "../api/api";

export default function Bills() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    API.get("/bills").then((res) => setBills(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bills</h2>

      {bills.length === 0 && <p>No bills available</p>}

      {bills.map((b) => (
        <div
          key={b._id}
          className="border p-3 mb-2 rounded"
        >
          <p><b>Member:</b> {b.member?.name}</p>
          <p><b>Amount:</b> ₹{b.amount}</p>
          <p><b>Date:</b> {new Date(b.createdAt).toDateString()}</p>
        </div>
      ))}
    </div>
  );
}
