import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function AdminDoctors() {
  const admin = Cookies.get("admin_token");

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  if (!admin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <a
          href="/admin"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Admin Login
        </a>
      </div>
    );
  }

  // Fetch doctors
  const fetchDoctors = async (name = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://hospitlybackend.onrender.com/api/doctors?name=${name}`
      );
      const data = await res.json();
      setDoctors(data);
    } catch (err) {
      console.error("Error fetching doctors", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchDoctors();
  }, []);

  // Search handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchDoctors(value);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Hospitly Admin</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
          <li className="font-semibold">Doctors</li>
          <li className="hover:text-gray-300 cursor-pointer">Users</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Doctors</h1>
          <span className="text-gray-600">
            Total Doctors: {doctors.length}
          </span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={handleSearch}
          className="mb-4 p-2 border rounded w-full"
        />

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Specialization</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="p-6 text-center">
                    Loading...
                  </td>
                </tr>
              ) : doctors.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-gray-500">
                    No doctors found
                  </td>
                </tr>
              ) : (
                doctors.map((doc) => (
                  <tr key={doc._id} className="border-b">
                    <td className="p-4">{doc.name}</td>
                    <td className="p-4">{doc.specialization}</td>
                    <td className="p-4 text-center space-x-2">
                      <button className="bg-yellow-400 px-3 py-1 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default AdminDoctors;
