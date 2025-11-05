import CourtCard from "@/components/court-card";
import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";

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
  courts: Court[];
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

        <div className="max-w-6xl mx-auto px-8 mt-10">
          <div className="bg-[#F5F5F5] rounded-xl p-8 shadow-lg">
            <h3 className="font-[Quicksand] font-bold text-xl mb-6">
              Find Your Perfect Court
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="font-[Quicksand] font-semibold text-sm mb-2 block">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                />
              </div>
              <div>
                <label className="font-[Quicksand] font-semibold text-sm mb-2 block">
                  Time
                </label>
                <select className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white">
                  {timeslots.map((timeslot) => (
                    <option key={timeslot.id} value={timeslot.id}>
                      {timeslot.start_time} - {timeslot.end_time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-[Quicksand] font-semibold text-sm mb-2 block">
                  Location
                </label>
                <select className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white">
                  <option>All Locations</option>
                  <option>Downtown Sports Center</option>
                  <option>Westside Arena</option>
                  <option>Northpoint Club</option>
                </select>
              </div>
            </div>
            <button className="bg-black text-white font-[Quicksand] font-bold px-8 py-3 rounded-lg mt-6 hover:scale-105 transition duration-300 ease-in-out shadow-xl">
              Search Courts
            </button>
          </div>
        </div>

      
        <div className="max-w-6xl mx-auto px-8 mt-16 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-[Quicksand] font-bold text-3xl">
              Available Courts
            </h2>
            <span className="bg-black text-white font-[Quicksand] font-bold px-4 py-1 rounded-full text-sm">
              {courts.length}
            </span>
          </div>

          {courts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courts.map((court) => (
                <CourtCard
                  key={court.id}
                  id={court.id}
                  name={court.name}
                  price={formatPrice(court.price)}
                  image_path={`/images/${court.image_path}`}
                />
              ))}
            </div>
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