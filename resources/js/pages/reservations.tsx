import CourtCard from "@/components/court-card";
import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";

interface Court {
  id: number;
  name: string;
  image_path: string;
  price: number;
}

interface ReservationsProps {
  courts: Court[];
}

export default function Reservations({ courts }: ReservationsProps) {

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

     
        <div className="max-w-6xl mx-auto px-8 mt-12">
          <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="font-[Quicksand] font-semibold text-sm mb-2 block">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="font-[Quicksand] font-semibold text-sm mb-2 block">
                  Time
                </label>
                <select className="w-full p-3 rounded-lg border border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black">
                  <option>Any Time</option>
                  <option>Morning (6AM - 12PM)</option>
                  <option>Afternoon (12PM - 6PM)</option>
                  <option>Evening (6PM - 10PM)</option>
                </select>
              </div>
              <div>
                <label className="font-[Quicksand] font-semibold text-sm mb-2 block">
                  Location
                </label>
                <select className="w-full p-3 rounded-lg border border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black">
                  <option>All Locations</option>
                  <option>Downtown Sports Center</option>
                  <option>Westside Arena</option>
                  <option>Northpoint Club</option>
                </select>
              </div>
            </div>
            <button className="bg-black text-white font-[Quicksand] font-bold px-8 py-3 rounded-lg mt-4 hover:bg-[#333] transition duration-300">
              Search Courts
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 mt-12 mb-20">
          <h2 className="font-[Quicksand] font-bold text-2xl mb-6">
            AVAILABLE COURTS
          </h2>

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
        </div>
      </div>

      <Footer />
    </>
  );
}
