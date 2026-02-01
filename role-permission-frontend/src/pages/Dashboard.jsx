import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/me")
      .then(res => setUser(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.roles[0]?.name}</p>
    </div>
  );
}
