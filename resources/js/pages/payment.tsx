import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { Link } from "@inertiajs/react";

interface Timeslot {
  id: number;
  day: string;
  start_time: string;
  end_time: string;
}

interface Court {
  id: number;
  name: string;
  price: number | string; 
}

interface PaymentProps {
  timeslots: Timeslot[];
  court: Court;
}

export default function Payment({ timeslots, court }: PaymentProps) {
  const fee = 2500; 
  const total = Number(court.price) + fee; 

  const formatIDR = (amount: number) =>
    amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

  return (
    <>
      <title>Payment | Diro</title>
      <Navbar />
      <div className="min-h-screen bg-white py-12">

        <div className="text-center mt-8 px-8">
          <h1 className="font-[Quicksand] font-bold text-4xl">
            Complete Your <span className="text-[#D1D3D4]">Reservation</span>
          </h1>
          <p className="font-[Quicksand] text-lg text-[#6B6B6B] mt-4">
            Select your preferred time slot and confirm your booking
          </p>
        </div>

      
        <div className="max-w-2xl mx-auto px-8 mt-12">
          <div className="bg-[#F5F5F5] rounded-xl p-8 shadow-lg">
            
     
            <div className="flex justify-center mb-6">
              <img
                src="/images/shuttlecock.png"
                alt="Shuttlecock"
                className="w-16 h-16"
              />
            </div>

           
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="font-[Quicksand] font-bold text-xl mb-3">
                Booking Details
              </h2>
              <div className="space-y-2 font-[Quicksand] text-[#6B6B6B]">
                <p>{court.name}</p>
                <p className="font-bold text-black text-lg mt-3">
                  {formatIDR(Number(court.price))}
                  <span className="text-sm text-[#6B6B6B]"> /jam</span>
                </p>
              </div>
            </div>

          
            <div className="mb-6">
              <label className="font-[Quicksand] font-semibold text-base mb-3 block">
                Select Day
              </label>
              <select className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] text-base focus:outline-none focus:border-black transition duration-300 bg-white">
                {timeslots.map((timeslot) => (
                  <option key={`day-${timeslot.id}`} value={timeslot.id}>
                    {timeslot.day}
                  </option>
                ))}
              </select>
            </div>

           
            <div className="mb-8">
              <label className="font-[Quicksand] font-semibold text-base mb-3 block">
                Select Time
              </label>
              <select className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] text-base focus:outline-none focus:border-black transition duration-300 bg-white">
                {timeslots.map((timeslot) => (
                  <option key={`time-${timeslot.id}`} value={timeslot.id}>
                    {timeslot.start_time} - {timeslot.end_time}
                  </option>
                ))}
              </select>
            </div>

            
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex justify-between items-center font-[Quicksand] mb-2">
                <span className="text-[#6B6B6B]">Court Rent</span>
                <span className="font-semibold">
                  {formatIDR(Number(court.price))}
                </span>
              </div>
              <div className="flex justify-between items-center font-[Quicksand] mb-2">
                <span className="text-[#6B6B6B]">Service Fee</span>
                <span className="font-semibold">{formatIDR(fee)}</span>
              </div>
              <div className="border-t-2 border-[#F5F5F5] my-3"></div>
              <div className="flex justify-between items-center font-[Quicksand]">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-2xl">{formatIDR(total)}</span>
              </div>
            </div>

            
            <Link
              href="/confirm"
              className="w-full bg-black text-white font-[Quicksand] font-bold px-6 py-4 rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-xl flex items-center justify-center text-lg"
            >
              Reserve Now
            </Link>

            <p className="font-[Quicksand] text-xs text-[#6B6B6B] text-center mt-4">
              By confirming, You acept our terms and conditions
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
