import { Link } from "@inertiajs/react";

interface CourtCardProps {
  id: number;
  name: string;
  price: string; 
  image_path: string;
}



export default function CourtCard({ id, name, image_path, price }: CourtCardProps) {
    return (
        <div
            key={id}
            className="bg-white border-2 border-[#F5F5F5] rounded-xl p-6 hover:border-black transition duration-300 shadow-xl/30"
        >
            <img
                src={image_path}
                alt={name}
                className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="font-[Quicksand] font-bold text-xl">{name}</h3>
            <p className="font-[Quicksand] text-[#6B6B6B] text-sm mt-1">
                {price.toLocaleString()}
            </p>

            <div className="flex justify-between items-center mt-4">
            
                
                    <Link 
                    
                    href={`/reservations/${id}`}
                        className="bg-black text-white font-[Quicksand] font-bold px-6 py-2 rounded-lg hover:scale-105 transition duration-300">
                        View Slots
                    </Link>
                
            </div>
        </div>
    );
}
