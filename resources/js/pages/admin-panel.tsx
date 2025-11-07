import Navbar from "../components/navbar-home";
import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<"users" | "courts">("users");

  return (
    <>
      <title>Admin Panel | Diro</title>
      <Navbar />
      
      <div className="min-h-screen bg-white pb-20">
        
        <div className="bg-white py-12 px-8 border-b border-[#F5F5F5]">
          <div className="max-w-6xl mx-auto text-center">
            <img 
              src="/images/admin.png" 
              className="w-auto h-20 mx-auto mb-6"
              alt="Admin"
            />
            <h1 className="font-[Quicksand] font-bold text-5xl mb-4">
              Admin <span className="text-[#D1D3D4]">Panel</span>
            </h1>
            <p className="font-[Quicksand] text-lg text-[#6B6B6B]">
              Manage users and courts from your dashboard
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 mt-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F5F5F5]">
              <div className="text-3xl mb-2">👥</div>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B] mb-1">Total Users</p>
              <p className="font-[Quicksand] font-bold text-3xl">0</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F5F5F5]">
              <div className="text-3xl mb-2">🏸</div>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B] mb-1">Total Courts</p>
              <p className="font-[Quicksand] font-bold text-3xl">0</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F5F5F5]">
              <div className="text-3xl mb-2">📅</div>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B] mb-1">Active Bookings</p>
              <p className="font-[Quicksand] font-bold text-3xl">0</p>
            </div>
          </div>
        </div>

     
        <div className="max-w-6xl mx-auto px-8 mb-8">
          <div className="bg-[#F5F5F5] rounded-xl p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab("users")}
              className={`font-[Quicksand] font-bold px-8 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "users"
                  ? "bg-black text-white shadow-lg"
                  : "bg-transparent text-[#6B6B6B] hover:text-black"
              }`}
            >
              👥 Users Management
            </button>
            <button
              onClick={() => setActiveTab("courts")}
              className={`font-[Quicksand] font-bold px-8 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "courts"
                  ? "bg-black text-white shadow-lg"
                  : "bg-transparent text-[#6B6B6B] hover:text-black"
              }`}
            >
              🏸 Courts Management
            </button>
          </div>
        </div>

        
        <div className="max-w-6xl mx-auto px-8">
          {activeTab === "users" ? (
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F5F5F5]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-[Quicksand] font-bold text-2xl">
                  Users Management
                </h2>
                <button className="bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:scale-105 transition duration-300 shadow-xl">
                  + Add New User
                </button>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#F5F5F5]">
                      <th className="font-[Quicksand] font-bold text-left p-4">ID</th>
                      <th className="font-[Quicksand] font-bold text-left p-4">Name</th>
                      <th className="font-[Quicksand] font-bold text-left p-4">Email</th>
                      <th className="font-[Quicksand] font-bold text-left p-4">Role</th>
                      <th className="font-[Quicksand] font-bold text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-center py-16">
                        <div className="text-5xl mb-4">👥</div>
                        <p className="font-[Quicksand] font-bold text-xl text-[#6B6B6B]">
                          No users found
                        </p>
                        <p className="font-[Quicksand] text-sm text-[#6B6B6B] mt-2">
                          Add your first user to get started
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F5F5F5]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-[Quicksand] font-bold text-2xl">
                  Courts Management
                </h2>
                <button className="bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:scale-105 transition duration-300 shadow-xl">
                  + Add New Court
                </button>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search courts by name..."
                  className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300"
                />
              </div>

              <div className="text-center py-16 bg-white rounded-xl border border-[#F5F5F5]">
                <div className="text-6xl mb-4">🏸</div>
                <p className="font-[Quicksand] font-bold text-xl text-[#6B6B6B]">
                  No courts available
                </p>
                <p className="font-[Quicksand] text-sm text-[#6B6B6B] mt-2">
                  Add your first court to start managing reservations
                </p>
              </div>
            </div>
          )}
        </div>


      </div>
    </>
  );
}
