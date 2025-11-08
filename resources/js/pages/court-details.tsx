import CourtCard from "@/components/court-card";
import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { Link } from "@inertiajs/react";

interface CourtDetail {
  id: number;
  name: string;
  image_path: string;
  price: number;
}

interface CourtDetailProps {
  court: CourtDetail;
}

export default function CourtDetails({ court }: CourtDetailProps) {
  return (
    <>
      <title>Court Reservation | Diro</title>
      <Navbar/>

      <div className="min-h-screen bg-white flex flex-col items-center">
   
        <div className="text-center mt-16 px-6">
          <h1 className="font-[Quicksand] font-bold text-4xl">
            {court.name}
          </h1>
          <p className="font-[Quicksand] text-[#6B6B6B] mt-3 text-lg">
            Court details and booking information
          </p>
        </div>

      
        <div className="w-full max-w-4xl mt-12 px-6">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              <img
                src={`/images/${court.image_path}`} 
                alt={court.name}
            />


              
              <div className="flex-1">
                <h2 className="font-[Quicksand] font-bold text-2xl mb-3">
                  {court.name}
                </h2>
                <p className="font-[Quicksand] text-[#6B6B6B] mb-4 leading-relaxed">
                  Enjoy premium-quality facilities and top-notch courts designed
                  for your best game experience. Reserve now and guarantee your
                  spot.
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-[Quicksand] font-bold text-2xl">
                    Rp {court.price.toLocaleString("id-ID")}
                    <span className="text-sm text-[#6B6B6B]"> /hour</span>
                  </span>
                  
                    <Link
                      href={`/reservations/${court.id}/payment`}
                      className="bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:bg-[#333]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    >
                    Reserve Now
                    </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-10 mb-20">
         
            <Link
            
            href="/reservations"
            className="font-[Quicksand] text-[#6B6B6B] hover:text-black underline underline-offset-4 transition">
            
            ← Back to all courts
            </Link>
         
        </div>
      </div>

      <Footer />
    </>
  );
}
