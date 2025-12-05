import Navbar from "../components/navbar-home";
import { useState } from "react";
import { Link, router } from "@inertiajs/react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Court {
  id: number;
  type: string;
  name: string;
}

interface Timeslot {
  id: number;
  start_time: string;
  end_time: string;
}

interface Reservation {
  id: number;
  user_id: number;
  court_id: number;
  timeslot_id: number;
  date: string;
  status: string;
  user: User;
  court: Court;
  timeslot: Timeslot;
}

interface AdminProps {
  users: User[];
  reservations: Reservation[];
  courts: Court[];
}

export default function AdminPanel({ users, reservations, courts }: AdminProps) {
  const [activeTab, setActiveTab] = useState<"users" | "reservations">("users");

  return (
    <>
      <title>Admin Panel | Diro</title>
      <Navbar />

      <div className="min-h-screen bg-white pt-30 pb-20">
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
              Manage users and reservations from your dashboard
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 mt-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F5F5F5]">
              <div className="text-3xl mb-2"></div>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B] mb-1">
                Total Users
              </p>
              <p className="font-[Quicksand] font-bold text-3xl">
                {users.length}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F5F5F5]">
              <div className="text-3xl mb-2"></div>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B] mb-1">
                Total Reservations
              </p>
              <p className="font-[Quicksand] font-bold text-3xl">
                {reservations.length}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F5F5F5]">
              <div className="text-3xl mb-2"></div>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B] mb-1">
                Active Courts
              </p>
              <p className="font-[Quicksand] font-bold text-3xl">
                {courts.length}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 mb-8">
          <div className="bg-[#F5F5F5] rounded-xl p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab("users")}
              className={`font-[Quicksand] font-bold px-8 py-3 rounded-lg transition-all duration-300 ${activeTab === "users"
                  ? "bg-black text-white shadow-lg"
                  : "bg-transparent text-[#6B6B6B] hover:text-black"
                }`}
            >
              Users Management
            </button>
            <button
              onClick={() => setActiveTab("reservations")}
              className={`font-[Quicksand] font-bold px-8 py-3 rounded-lg transition-all duration-300 ${activeTab === "reservations"
                  ? "bg-black text-white shadow-lg"
                  : "bg-transparent text-[#6B6B6B] hover:text-black"
                }`}
            >
              Reservations Management
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
                <Link
                  href="/admin/adminpanel/users"
                  className="bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:scale-105 transition duration-300 shadow-xl">
                  + Add New User
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#F5F5F5]">
                      <th className="p-4 text-left font-[Quicksand] font-bold">ID</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">Name</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">Email</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">Role</th>
                      <th className="p-4 text-center font-[Quicksand] font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map((user) => (
                        <tr
                          key={user.id}
                          className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition duration-200"
                        >
                          <td className="p-4 font-[Quicksand]">{user.id}</td>
                          <td className="p-4 font-[Quicksand] font-semibold">{user.name}</td>
                          <td className="p-4 font-[Quicksand] text-[#6B6B6B]">{user.email}</td>
                          <td className="p-4 font-[Quicksand]">
                            <span className="bg-[#F5F5F5] px-3 py-1 rounded-full text-sm font-semibold">
                              {user.role}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() => {
                                  if (confirm(`Delete user "${user.name}"?`)) {
                                    router.delete(`/admin/adminpanel/${user.id}`);
                                  }
                                }}
                                className="bg-red-500 text-white font-[Quicksand] font-semibold px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition duration-300 shadow-md flex items-center gap-2 cursor-pointer"
                              >
                                 Delete User
                              </button>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center">
                              <Link
                              href={`/user/edit/${user.id}`}
                              className="bg-yellow-500 text-white font-[Quicksand] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow-md flex items-center gap-2 cursor-pointer">
                                 Edit User
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="text-center py-16 font-[Quicksand]"
                        >
                          <div className="text-5xl mb-4"></div>
                          <p className="font-bold text-xl text-[#6B6B6B]">
                            No users found
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F5F5F5]">
              <h2 className="font-[Quicksand] font-bold text-2xl mb-6">
                Reservations Management
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#F5F5F5]">
                      <th className="p-4 text-left font-[Quicksand] font-bold">ID</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">User</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">Court</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">Timeslot</th>
                      <th className="p-4 text-left font-[Quicksand] font-bold">Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    {reservations.length > 0 ? (
                      reservations.map((r) => (
                        <tr
                          key={r.id}
                          className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition duration-200"
                        >
                          <td className="p-4 font-[Quicksand]">{r.id}</td>
                          <td className="p-4 font-[Quicksand] font-semibold">{r.user.name}</td>
                          <td className="p-4 font-[Quicksand]">{r.court.name}</td>
                          <td className="p-4 font-[Quicksand] text-[#6B6B6B]">
                            {r.timeslot.start_time} - {r.timeslot.end_time}
                          </td>
                          <td className="p-4 font-[Quicksand]">{r.date}</td>
                          <td className="p-4 font-[Quicksand]">

                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={6}
                          className="text-center py-16 font-[Quicksand]"
                        >
                          <div className="text-6xl mb-4">🏸</div>
                          <p className="font-bold text-xl text-[#6B6B6B]">
                            No reservations
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}