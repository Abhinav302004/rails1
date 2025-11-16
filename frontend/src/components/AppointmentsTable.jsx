export default function AppointmentsTable({ appointments, onDelete, onEdit }) {
  return (
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Person of Contact</th>
          <th>Date</th>
          <th>Time</th>
          <th style={{ width: "150px" }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {appointments.map((a) => (
          <tr key={a.id}>
            <td>{a.name}</td>
            <td>{a.poc}</td>
            <td>{a.date}</td>
            <td>{a.time}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEdit(a)}
              >
                Edit
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(a.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
