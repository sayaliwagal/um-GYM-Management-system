import { useEffect, useState } from "react";
import API from "../api/api";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMembers = async () => {
    try {
      const res = await API.get("/members");
      setMembers(res.data);
    } catch (error) {
      alert("Failed to load members");
    } finally {
      setLoading(false);
    }
  };

  const deleteMember = async (id) => {
    if (!window.confirm("Delete this member?")) return;
    await API.delete(`/members/${id}`);
    fetchMembers();
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  if (loading) return <p className="p-6">Loading members...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Members</h2>

      {members.length === 0 && <p>No members found</p>}

      {members.map((m) => (
        <div
          key={m._id}
          className="border p-4 mb-3 rounded flex justify-between"
        >
          <div>
            <p className="font-semibold">{m.name}</p>
            <p>{m.email}</p>
            <p>₹{m.feeAmount}</p>
          </div>

          <button
            onClick={() => deleteMember(m._id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
