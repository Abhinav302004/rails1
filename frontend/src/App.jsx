import AppointmentsTable from "./components/AppointmentsTable";
import AppointmentForm from "./components/AppointmentsForm";
import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000/appointments";

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(API);
    setAppointments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  const handleSave = async (data) => {
    if (editing) {
      await axios.put(`${API}/${editing.id}`, data);
    } else {
      await axios.post(API, data);
    }
    setEditing(null);
    fetchData();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Appointment Scheduler</h2>
      <AppointmentForm
        onSave={handleSave}
        editing={editing}
        onCancel={() => setEditing(null)}
      ></AppointmentForm>
      <AppointmentsTable
        appointments={appointments}
        onDelete={handleDelete}
        onEdit={(item) => setEditing(item)}
      ></AppointmentsTable>
    </div>
  );
}
