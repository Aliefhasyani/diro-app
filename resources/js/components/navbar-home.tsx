import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { props }: any = usePage();
  const user = props.auth?.user;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-20 transition-all backdrop-blur-sm shadow-md  font-[Quicksand]">
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">

            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center hover:opacity-70 transition-opacity"
              >
                <img
                  src="/images/diro-logo.png"
                  alt="Diro"
                  className="h-10"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-10">
              <NavLink href="/" active={window.location.pathname === '/'}>
                Home
              </NavLink>
              <NavLink href="/reservations" active={window.location.pathname.startsWith('/reservations')}>
                Reservations
              </NavLink>
              <NavLink href="/about" active={window.location.pathname === '/about'}>
                About
              </NavLink>
            </div>

            <div className="flex items-center gap-6">

              {user?.role === "admin" && (
                <Link
                  href="/admin/adminpanel"
                  className="hidden lg:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 tracking-wide hover:bg-emerald-200 transition-colors"
                >
                  ADMIN PANEL
                </Link>
              )}

              <div className="relative">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className={`flex items-center gap-2 transition-colors duration-300 ${isAccountOpen ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                >
                  <span className="text-lg font-bold tracking-wide hidden sm:block">
                    {user ? user.name?.split(' ')[0] : "Account"}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isAccountOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isAccountOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden transform origin-top-right transition-all">
                    {!user ? (
                      <div className="py-2">
                        <Link
                          href="/login"
                          className="block px-5 py-3 text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                          onClick={() => setIsAccountOpen(false)}
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          className="block px-5 py-3 text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                          onClick={() => setIsAccountOpen(false)}
                        >
                          Register
                        </Link>
                      </div>
                    ) : (
                      <div className="py-2">
                        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Signed in as</p>
                          <p className="text-sm font-bold text-gray-900 truncate">{user.email}</p>
                        </div>
                        <Link
                          href="/logout"
                          method="post"
                          as="button"
                          className="block w-full text-left px-5 py-3 text-base font-bold text-red-600 hover:bg-red-50 transition-colors"
                          onClick={() => setIsAccountOpen(false)}
                        >
                          Sign out
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>


        {isAccountOpen && (
          <div
            className="fixed inset-0 z-0 cursor-default"
            onClick={() => setIsAccountOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
}


function NavLink({ href, active, children }: { href: string, active?: boolean, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-lg font-bold tracking-wide transition-colors duration-300 ${active
          ? "text-black"
          : "text-gray-500 hover:text-black"
        }`}
    >
      {children}
    </Link>
  );
}