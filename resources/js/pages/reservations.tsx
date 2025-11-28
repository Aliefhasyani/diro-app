import CourtCard from "@/components/court-card";
import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { useState } from "react";
import { Star } from "lucide-react";

interface Court {
  id: number;
  name: string;
  image_path: string;
  price: number;
  rating: number;
  type: string;
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
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const filteredCourts = courts.filter((court) =>
    court.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <title>Reservations | Diro</title>
      <Navbar />

      <div className="min-h-screen pt-36 pb-20">
        <div className="px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/shuttlecock.png"
                alt="Shuttlecock"
                className="w-20 h-20 animate-bounce-slow"
              />
            </div>
            <h1 className="font-[Quicksand] font-bold text-5xl mb-4 leading-tight">
              Book Your <span className="text-[#D1D3D4]">Court</span>
            </h1>
            <p className="font-[Quicksand] text-xl text-[#6B6B6B] max-w-2xl mx-auto font-medium">
              Select a venue and time slot to make your reservation
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-[Quicksand] font-bold text-3xl">Available Courts</h2>
              <span className="bg-black text-white font-[Quicksand] font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                {filteredCourts.length}
              </span>

              {/* Styled Search Box */}
              <div className="ml-6 relative">
                <input
                  type="text"
                  placeholder="Search a Court..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="font-[Quicksand] px-4 py-2 w-56 md:w-64 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  🔍
                </span>
              </div>
            </div>

            {filteredCourts.length > 0 && (
              <p className="hidden sm:block font-[Quicksand] text-[#6B6B6B] font-medium text-sm">
                Showing available courts
              </p>
            )}
          </div>

          {filteredCourts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourts.map((court) => (
                <div key={court.id} className="flex flex-col gap-2">
               
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < Math.round(court.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-100 text-gray-300"
                        } transition-colors duration-200`}
                      />
                    ))}
                    <span className="text-sm font-medium text-gray-500 ml-1 font-[Quicksand]">
                      ({court.rating})
                    </span>
                  </div>

                  <CourtCard
                    id={court.id}
                    name={court.name}
                    price={formatPrice(court.price)}
                    
                    type={court.type}
                    image_path={`/images/${court.image_path}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-6xl mb-6">🏸</div>
              <p className="font-[Quicksand] font-bold text-2xl text-black mb-2">
                No Courts Found
              </p>
              <p className="font-[Quicksand] text-[#6B6B6B]">
                Try searching with a different name.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}