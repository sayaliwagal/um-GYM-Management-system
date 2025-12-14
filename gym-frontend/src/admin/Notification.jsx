export default function Notifications() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-3">
        Monthly Notifications
      </h2>

      <div className="bg-green-100 p-4 rounded">
        <p>
          ✔ Monthly fee reminders are automatically generated for
          members with unpaid bills.
        </p>
        <p>
          ✔ Admin is notified when a payment is completed.
        </p>
      </div>
    </div>
  );
}
