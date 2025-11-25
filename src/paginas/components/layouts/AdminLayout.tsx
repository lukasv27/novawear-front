
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";

export default function AdminLayout() {
  return (
    <div>
      <Navbar />
      <div className="p-10 max-w-6xl mx-auto">
        <Outlet /> {/* Aquí se renderiza la página hija */}
      </div>
    </div>
  );
}
