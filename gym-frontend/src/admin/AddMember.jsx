import { useState } from "react";
import API from "../api/api";

export default function AddMember() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "monthly",
    feeAmount: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (!form.name || !form.email || !form.phone || !form.feeAmount) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      await API.post("/members", form);
      alert("Member added successfully ✅");

      // reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        membershipType: "monthly",
        feeAmount: ""
      });
    } catch (error) {
      alert(error.response?.data?.message || "Error adding member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add Member</h2>

      <input
        className="w-full border p-2 mb-3 rounded"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <select
        className="w-full border p-2 mb-3 rounded"
        name="membershipType"
        value={form.membershipType}
        onChange={handleChange}
      >
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="yearly">Yearly</option>
      </select>

      <input
        className="w-full border p-2 mb-4 rounded"
        name="feeAmount"
        type="number"
        placeholder="Fee Amount"
        value={form.feeAmount}
        onChange={handleChange}
      />

      <button
        onClick={submit}
        disabled={loading}
        className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
      >
        {loading ? "Saving..." : "Save Member"}
      </button>
    </div>
  );
}
