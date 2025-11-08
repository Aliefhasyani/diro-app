import CourtCard from "@/components/court-card";
import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { useState } from "react";

interface Court {
  id: number;
  name: string;
  image_path: string;
  price: number;
  type:string;
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

        <div className="bg-gradient-to-b from-[#F5F5F5] to-white py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/shuttlecock.png"
                alt="Shuttlecock"
                className="w-20 h-20"
              />
            </div>
            <h1 className="font-[Quicksand] font-bold text-5xl mb-4">
              Book Your <span className="text-[#D1D3D4]">Court</span>
            </h1>
            <p className="font-[Quicksand] text-xl text-[#6B6B6B] max-w-2xl mx-auto">
              Select a venue and time slot to make your reservation
            </p>
          </div>
        </div>

     

       
 


        <div className="max-w-6xl mx-auto px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-[Quicksand] font-bold text-3xl">
                Available Courts
              </h2>
              <span className="bg-black text-white font-[Quicksand] font-bold px-4 py-1 rounded-full text-sm">
                {courts.length}
              </span>
            </div>
            {courts.length > 0 && (
              <p className="font-[Quicksand] text-[#6B6B6B] text-sm">
                Showing all available courts
              </p>
            )}
          </div>

          {courts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courts.map((court) => (
                <CourtCard
                  key={court.id}
                  id={court.id}
                  name={court.name}
                  price={formatPrice(court.price)}
                  type={court.type}
                  image_path={`/images/${court.image_path}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#F5F5F5] rounded-2xl">
              <div className="text-6xl mb-4">🏸</div>
              <p className="font-[Quicksand] font-bold text-2xl text-black mb-2">
                No Courts Available
              </p>
             
       
            </div>
          )}
        </div>

          
        
      </div>

      <Footer />
    </>
  );
}