import { Link } from "@inertiajs/react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="bg-[#F5F5F5] flex items-center justify-between px-8 w-auto h-20 font-[Quicksand] text-2xl font-bold">
          <Link 
            href="/homepage"
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

            
          </div>
        </div>
        <div></div>
      </nav>
    </>
  );
}
