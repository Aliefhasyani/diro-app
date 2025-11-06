import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="bg-[#F5F5F5] flex items-center justify-between px-8 w-auto h-20 font-[Quicksand] text-2xl font-bold">
          <Link 
            href="/"
            className="tracking-[0.1em] font-[Quicksand]">
            DIRO
          </Link>

          <div className="flex items-center justify-center gap-12">
            <Link
              href="/"
              className="text-[#000000] hover:underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              HOME
            </Link>

            <Link
              href="/reservations"
              className="text-[#000000] hover:underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              RESERVATIONS
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="text-[#000000] hover:underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center gap-2"
              >
                ACCOUNT
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isAccountOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

        
              {isAccountOpen && (
                <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl border-2 border-[#F5F5F5] overflow-hidden z-50">
                  <Link
                    href="/login"
                    className="block px-6 py-3 text-base font-[Quicksand] font-semibold text-[#000000] hover:bg-[#F5F5F5] transition duration-300"
                    onClick={() => setIsAccountOpen(false)}
                  >
                    Login
                  </Link>
                  <div className="border-t border-[#F5F5F5]"></div>
                  <Link
                    href="/register"
                    className="block px-6 py-3 text-base font-[Quicksand] font-semibold text-[#000000] hover:bg-[#F5F5F5] transition duration-300"
                    onClick={() => setIsAccountOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {isAccountOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsAccountOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
}