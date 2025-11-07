import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Homepage() {


    return (
        <>
            <title>Homepage | Diro</title>
            <Navbar />
        
            <div className="text-center mt-15">
                <p className="font-[Quicksand] font-bold text-4xl">
                    Quick <span className="text-[#D1D3D4]">and</span> Easy Badminton Court Reservations
                </p>
                <p className="text-lg font-[Quicksand] font-semibold mt-6">
                    Reservations Made Easy.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
                <img
                    src="/images/shuttlecock.png"
                    alt="Shuttlecock"
                    className="w-20 h-20"
                />
                <button className="bg-[#000000] font-[Quicksand] font-bold text-[#ffffff] w-55 h-12 mt-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-xl shadow-xl/30">
                    <Link
                        href="/reservations"
                    >
                        Book a reservation
                    </Link>
                </button>
            </div>

          
            <div className="mt-24 px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">⚡</span>
                        </div>
                        <h3 className="font-[Quicksand] font-bold text-xl mb-3">Instant Booking</h3>
                        <p className="font-[Quicksand] text-[#6B6B6B]">
                            Reserve your court in seconds with our streamlined booking process.
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">📍</span>
                        </div>
                        <h3 className="font-[Quicksand] font-bold text-xl mb-3">Multiple Courts Slots</h3>
                        <p className="font-[Quicksand] text-[#6B6B6B]">
                            Find and book various  courts 
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">💳</span>
                        </div>
                        <h3 className="font-[Quicksand] font-bold text-xl mb-3">Secure Payment</h3>
                        <p className="font-[Quicksand] text-[#6B6B6B]">
                            Pay safely with multiple payment options available.
                        </p>
                    </div>
                </div>
            </div>

    
            <div className="mt-24 px-8 max-w-4xl mx-auto text-center mb-20">
                <h2 className="font-[Quicksand] font-bold text-3xl mb-12">
                    How <span className="text-[#D1D3D4]">It</span> Works
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                        <div className="w-12 h-12 bg-black text-white rounded-full mx-auto flex items-center justify-center font-[Quicksand] font-bold text-xl mb-4">
                            1
                        </div>
                        <h4 className="font-[Quicksand] font-bold text-lg mb-2">Choose Your Court</h4>
                        <p className="font-[Quicksand] text-[#6B6B6B] text-sm">
                            Browse available courts and select your preferred venue.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="w-12 h-12 bg-black text-white rounded-full mx-auto flex items-center justify-center font-[Quicksand] font-bold text-xl mb-4">
                            2
                        </div>
                        <h4 className="font-[Quicksand] font-bold text-lg mb-2">Pick Date & Time</h4>
                        <p className="font-[Quicksand] text-[#6B6B6B] text-sm">
                            Select the date and time slot that fits your schedule.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="w-12 h-12 bg-black text-white rounded-full mx-auto flex items-center justify-center font-[Quicksand] font-bold text-xl mb-4">
                            3
                        </div>
                        <h4 className="font-[Quicksand] font-bold text-lg mb-2">Confirm & Play</h4>
                        <p className="font-[Quicksand] text-[#6B6B6B] text-sm">
                            Complete your booking and get ready to play badminton.
                        </p>
                    </div>
                </div>
            </div>

          
            <Footer></Footer>
        </>
    );
}