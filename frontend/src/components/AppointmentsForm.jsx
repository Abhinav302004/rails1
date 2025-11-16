import { useEffect, useState } from "react";
export default function AppointmentForm({ onSave, editing, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    poc: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.poc || !form.date || !form.time) {
      alert("All fields are required!");
      return;
    }
    onSave(form);
    setForm({ name: "", poc: "", date: "", time: "" });
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h5>{editing ? "Edit Appointment" : "New Appointment"}</h5>
      <div className="row mt-2">
        <div className="col">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Appointment Name"
            className="form-control"
          />
        </div>

        <div className="col">
          <input
            required
            name="poc"
            value={form.poc}
            onChange={handleChange}
            placeholder="Person of Contact"
            className="form-control"
          />
        </div>

        <div className="col">
          <input
            required
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Appointment Date"
            className="form-control"
          />
        </div>

        <div className="col">
          <input
            required
            name="time"
            value={form.time}
            onChange={handleChange}
            placeholder="Appointment Time"
            className="form-control"
          />
        </div>
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        {editing ? "Update" : "Add"}
      </button>

      {editing && (
        <button className="btn btn-secondary mt-3 ms-2" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
