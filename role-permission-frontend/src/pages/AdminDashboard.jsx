import { useState } from "react";
import { Menu, X, Home, Users, Settings } from "lucide-react";
import CreateUser from "../components/users/CreateUser";


export default function AppLayout() {
const [open, setOpen] = useState(false);


return (
<div className="flex h-screen bg-gray-100">
{/* Sidebar */}
<aside
className={`fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:shadow-none`}
>
<div className="h-16 flex items-center justify-between px-4 border-b">
<span className="font-bold text-lg">Admin Panel</span>
<button className="md:hidden" onClick={() => setOpen(false)}>
<X />
</button>
</div>


<nav className="p-4 space-y-2">
<NavItem icon={<Home size={18} />} label="Dashboard" />
<NavItem icon={<Users size={18} />} label="Users" />
<NavItem icon={<Settings size={18} />} label="Settings" />
</nav>
</aside>


{/* Overlay for mobile */}
{open && (
<div
className="fixed inset-0 bg-black/40 z-30 md:hidden"
onClick={() => setOpen(false)}
/>
)}


{/* Main content */}
<div className="flex-1 flex flex-col">
{/* Navbar */}
<header className="h-16 bg-white shadow flex items-center px-4">
<button className="md:hidden mr-3" onClick={() => setOpen(true)}>
<Menu />
</button>
<h1 className="text-xl font-semibold">Dashboard</h1>
</header>


<main className="flex-1 p-6">
<div className="bg-white rounded-xl shadow p-6">
{/* <p className="text-gray-700">Your page content goes here.</p> */}
<CreateUser/>
</div>
</main>
</div>
</div>
);
}


function NavItem({ icon, label }) {
return (
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
{icon}
<span>{label}</span>
</button>
);
}