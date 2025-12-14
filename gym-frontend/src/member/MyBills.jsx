import { useEffect, useState } from "react";
import API from "../api/api";

export default function MyBills() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    API.get("/bills/my").then(res => setBills(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2>My Bills</h2>
      {bills.map(b => (
        <div key={b._id}>
          Month: {b.month} | Amount: ₹{b.amount}
        </div>
      ))}
    </div>
  );
}
