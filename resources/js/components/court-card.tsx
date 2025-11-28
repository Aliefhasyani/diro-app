import { Link } from "@inertiajs/react";

interface CourtCardProps {
  id: number;
  name: string;
  image_path: string;
  type:string;
  price: number;

}

export default function CourtCard({ id, name, image_path, price,type }: CourtCardProps) {
  return (
    <div className="bg-white border-2 border-[#F5F5F5] rounded-xl overflow-hidden hover:border-black transition-all duration-300 shadow-lg hover:shadow-2xl group">

      <div className="relative h-64 overflow-hidden">
        <img
          src={image_path}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="font-[Quicksand] font-bold text-xs text-black">
              🏸 AVAILABLE
            </span>
          </div>
        </div>
      </div>


      <div className="p-6">
    
        <h3 className="font-[Quicksand] font-bold text-2xl mb-3">{name}</h3>

     
        <div className="flex items-center gap-4 mb-4 text-sm font-[Quicksand] text-[#6B6B6B]">
       
          <p className="flex items-center gap-1 font-bold">
              {type}
          </p>
        </div>

   
        <div className="border-t border-[#F5F5F5] my-4"></div>

    
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-[Quicksand] text-xs text-[#6B6B6B] mb-1">
              Starting from
            </p>
            <div className="flex items-baseline gap-1">
              <span className="font-[Quicksand] font-bold text-3xl text-black">
                {price}
              </span>
              <span className="font-[Quicksand] text-[#6B6B6B] text-sm">
                /hour
              </span>
   
            </div>
          </div>
          <div className="text-right">
            <div className="bg-[#F5F5F5] rounded-lg px-3 py-2">
              <p className="font-[Quicksand] text-xs text-[#6B6B6B]">
                Multiple slots
              </p>
              <p className="font-[Quicksand] font-bold text-sm text-black">
                available
              </p>
            </div>
          </div>
        </div>

      
        <Link
          href={`/reservations/${id}`}
          className="w-full bg-black text-white font-[Quicksand] font-bold px-6 py-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex items-center justify-center gap-2 group/button"
        >
          View Available Slots
          <span className="group-hover/button:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}