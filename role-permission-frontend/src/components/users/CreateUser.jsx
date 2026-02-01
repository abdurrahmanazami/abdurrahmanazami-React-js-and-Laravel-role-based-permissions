import { useState } from "react";
import api from "../../api/axios";
export default function CreateUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    permissions: []
  });

  const permissionsList = [
    "create post",
    "edit post",
    "delete post",
    "create category",
    "edit category",
    "delete category"
  ];

  const submit = async () => {
    try {
        console.log(form);
        
      await api.post("/admin/users", form);
      alert("User created successfully");
    } catch (err) {
      alert("Error creating user");
    }
  };

  const togglePermission = (p) => {
    setForm({
      ...form,
      permissions: form.permissions.includes(p)
        ? form.permissions.filter(x => x !== p)
        : [...form.permissions, p]
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input className="mx-3" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input className="mx-3" placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})} />

      <select onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="user">User</option>
        <option value="manager">Manager</option>
      </select>

      <h4 className="my-3">Permissions</h4>
      {permissionsList.map(p => (
        <label className="mx-3" key={p}>
          <input type="checkbox" onChange={()=>togglePermission(p)} />
          {p}
        </label>
      ))}

      <button className="btn btn-primary" onClick={submit}>Create User</button>
    </div>
  );
}
