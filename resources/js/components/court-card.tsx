import { Link } from "@inertiajs/react";

interface CourtCardProps {
  id: number;
  name: string;
  price: string;
  image_path: string;
}

export default function CourtCard({ id, name, image_path, price }: CourtCardProps) {
  return (
    <div className="bg-white border-2 border-[#F5F5F5] rounded-xl overflow-hidden hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
     
      <div className="relative h-56 overflow-hidden">
        <img
          src={image_path}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      
      <div className="p-6">
  
        <h3 className="font-[Quicksand] font-bold text-2xl mb-2">{name}</h3>

      
        <div className="flex items-baseline gap-1 mb-6">
          <span className="font-[Quicksand] font-bold text-2xl">{price}</span>
          <span className="font-[Quicksand] text-[#6B6B6B] text-sm">/Hour</span>
        </div>

       
        <Link
          href={`/reservations/${id}`}
          className="w-full bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex items-center justify-center"
        >
          View Slots
        </Link>
      </div>
    </div>
  );
}