import CourtCard from "@/components/court-card";
import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { Link } from "@inertiajs/react";
import { reservations as reservationsRoute } from "@/routes";

interface Court {
  id: number;
  name: string;
  image_path: string;
  price: number;
}

interface Timeslot {
  id: string;
  start_time: number;
  end_time: string;
}

interface ReservationsProps {
  // courts can be either an array (legacy) or a paginated object from the server
  courts: any;
  timeslots: Timeslot[];
}

export default function Reservations({ courts, timeslots }: ReservationsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <title>Reservations | Diro</title>
      <Navbar />
      <div className="min-h-screen bg-white">
     
        <div className="text-center mt-12 px-8">
          <h1 className="font-[Quicksand] font-bold text-4xl">
            Book Your <span className="text-[#D1D3D4]">Court</span>
          </h1>
          <p className="font-[Quicksand] text-lg text-[#6B6B6B] mt-4">
            Select a venue and time slot to make your reservation
          </p>
        </div>

     
        <div className="flex justify-center mt-8">
          <img
            src="/images/shuttlecock.png"
            alt="Shuttlecock"
            className="w-16 h-16"
          />
        </div>

       

      
        <div className="max-w-6xl mx-auto px-8 mt-16 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-[Quicksand] font-bold text-3xl">
              Available Courts
            </h2>
            <span className="bg-black text-white font-[Quicksand] font-bold px-4 py-1 rounded-full text-sm">
              {Array.isArray(courts) ? courts.length : courts?.meta?.total ?? 0}
            </span>
          </div>

          {(Array.isArray(courts) ? courts.length > 0 : (courts?.data?.length ?? 0) > 0) ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(Array.isArray(courts) ? courts : courts.data).map((court: any) => (
                  <CourtCard
                    key={court.id}
                    id={court.id}
                    name={court.name}
                    price={formatPrice(court.price)}
                    image_path={`/images/${court.image_path}`}
                  />
                ))}
              </div>

              {/* Pagination controls (if paginator provided) */}
              { !Array.isArray(courts) && courts?.meta && (
                <div className="flex items-center justify-center gap-3 mt-8">
                  <Link
                    href={reservationsRoute({ query: { page: Math.max(1, (courts.meta.current_page || 1) - 1) } }).url}
                    className={`px-4 py-2 rounded border ${courts.meta.current_page <= 1 ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    Prev
                  </Link>

                  {Array.from({ length: courts.meta.last_page }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={reservationsRoute({ query: { page: p } }).url}
                      className={`px-3 py-2 rounded border ${courts.meta.current_page === p ? 'bg-black text-white' : ''}`}
                    >
                      {p}
                    </Link>
                  ))}

                  <Link
                    href={reservationsRoute({ query: { page: Math.min(courts.meta.last_page || 1, (courts.meta.current_page || 1) + 1) } }).url}
                    className={`px-4 py-2 rounded border ${courts.meta.current_page >= (courts.meta.last_page || 1) ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    Next
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-[#F5F5F5] rounded-xl">
              <p className="font-[Quicksand] text-xl text-[#6B6B6B] mb-2">
                No courts available
              </p>
              <p className="font-[Quicksand] text-sm text-[#6B6B6B]">
                Try adjusting your filters or check back later
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}