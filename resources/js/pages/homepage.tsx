import Footer from "@/components/footer-diro";
import Navbar from "@/components/navbar-home";
import { Link } from "@inertiajs/react";

export default function Homepage() {
    return (
        <>
            <title>Homepage | Diro</title>
            <Navbar />

            <div className="pt-44 pb-20 px-8  min-h-screen">
                <div className="text-center max-w-4xl mx-auto">
                    <p className="font-[Quicksand] font-bold text-5xl md:text-5xl leading-tight">
                        Quick <span className="text-[#D1D3D4]">and</span> Easy Badminton Court Reservations
                    </p>
                    <p className="text-xl font-[Quicksand] font-semibold mt-6 text-[#6B6B6B]">
                        Reservations Made Easy.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center mt-12">
                    <img
                        src="/images/shuttlecock.png"
                        alt="Shuttlecock"
                        className="w-24 h-24 "
                    />
                    <Link
                        href="/reservations"
                        className="bg-black font-[Quicksand] font-bold text-white px-10 py-4 mt-8 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-xl shadow-2xl inline-block"
                    >
                        Book a Reservation
                    </Link>
                </div>
            </div>


            <div className="py-16 px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-[#F5F5F5] rounded-xl hover:shadow-lg transition duration-300">
                            <p className="font-[Quicksand] font-bold text-5xl mb-2">50+</p>
                            <p className="font-[Quicksand] font-semibold text-lg text-[#6B6B6B]">
                                Available Courts
                            </p>
                        </div>
                        <div className="text-center p-8 bg-[#F5F5F5] rounded-xl hover:shadow-lg transition duration-300">
                            <p className="font-[Quicksand] font-bold text-5xl mb-2">1000+</p>
                            <p className="font-[Quicksand] font-semibold text-lg text-[#6B6B6B]">
                                Happy Users
                            </p>
                        </div>
                        <div className="text-center p-8 bg-[#F5F5F5] rounded-xl hover:shadow-lg transition duration-300">
                            <p className="font-[Quicksand] font-bold text-5xl mb-2">24/7</p>
                            <p className="font-[Quicksand] font-semibold text-lg text-[#6B6B6B]">
                                Online Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>

       
            <div className="py-20 px-8 ">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-[Quicksand] font-bold text-4xl text-center mb-16">
                        Why Choose <span className="text-[#D1D3D4]">Diro</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
                                <span className="text-white text-3xl font-bold">⚡</span>
                            </div>
                            <h3 className="font-[Quicksand] font-bold text-2xl mb-4">Instant Booking</h3>
                            <p className="font-[Quicksand] text-[#6B6B6B] leading-relaxed">
                                Reserve your court in seconds with our streamlined booking process. No hassle, no waiting.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
                                <span className="text-white text-3xl font-bold">📍</span>
                            </div>
                            <h3 className="font-[Quicksand] font-bold text-2xl mb-4">Multiple Court Slots</h3>
                            <p className="font-[Quicksand] text-[#6B6B6B] leading-relaxed">
                                Find and book various courts at different time slots that fit your schedule perfectly.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
                                <span className="text-white text-3xl font-bold">💳</span>
                            </div>
                            <h3 className="font-[Quicksand] font-bold text-2xl mb-4">Secure Payment</h3>
                            <p className="font-[Quicksand] text-[#6B6B6B] leading-relaxed">
                                Pay safely with multiple payment options available. Your transactions are always protected.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-[Quicksand] font-bold text-4xl mb-4">
                        How <span className="text-[#D1D3D4]">It</span> Works
                    </h2>
                    <p className="font-[Quicksand] text-lg text-[#6B6B6B] mb-16">
                        Get started in three simple steps
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="flex-1">
                            <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center font-[Quicksand] font-bold text-2xl mb-6 shadow-lg">
                                1
                            </div>
                            <h4 className="font-[Quicksand] font-bold text-xl mb-3">Choose Your Court</h4>
                            <p className="font-[Quicksand] text-[#6B6B6B] leading-relaxed">
                                Browse available courts and select your preferred venue from our wide selection.
                            </p>
                        </div>

                        <div className="flex-1">
                            <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center font-[Quicksand] font-bold text-2xl mb-6 shadow-lg">
                                2
                            </div>
                            <h4 className="font-[Quicksand] font-bold text-xl mb-3">Pick Date & Time</h4>
                            <p className="font-[Quicksand] text-[#6B6B6B] leading-relaxed">
                                Select the date and time slot that fits your schedule perfectly.
                            </p>
                        </div>

                        <div className="flex-1">
                            <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center font-[Quicksand] font-bold text-2xl mb-6 shadow-lg">
                                3
                            </div>
                            <h4 className="font-[Quicksand] font-bold text-xl mb-3">Confirm & Play</h4>
                            <p className="font-[Quicksand] text-[#6B6B6B] leading-relaxed">
                                Complete your booking and get ready to play badminton with friends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 px-8 bg-[#F5F5F5]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-[Quicksand] font-bold text-4xl text-center mb-16">
                        What Our <span className="text-[#D1D3D4]">Users</span> Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="flex items-center gap-1 mb-4">
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                            </div>
                            <p className="font-[Quicksand] text-[#6B6B6B] mb-6 leading-relaxed">
                                "Booking courts has never been easier! Diro makes it so simple to find and reserve the perfect time slot."
                            </p>
                            <p className="font-[Quicksand] font-bold">Sarah Johnson</p>
                            <p className="font-[Quicksand] text-sm text-[#6B6B6B]">Regular Player</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="flex items-center gap-1 mb-4">
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                            </div>
                            <p className="font-[Quicksand] text-[#6B6B6B] mb-6 leading-relaxed">
                                "The instant booking feature is amazing. I can reserve a court on my way to the venue. Highly recommend!"
                            </p>
                            <p className="font-[Quicksand] font-bold">Michael Chen</p>
                            <p className="font-[Quicksand] text-sm text-[#6B6B6B]">Club Member</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="flex items-center gap-1 mb-4">
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                                <span className="text-2xl">⭐</span>
                            </div>
                            <p className="font-[Quicksand] text-[#6B6B6B] mb-6 leading-relaxed">
                                "Great platform with excellent customer service. The payment process is smooth and secure."
                            </p>
                            <p className="font-[Quicksand] font-bold">Emma Williams</p>
                            <p className="font-[Quicksand] text-sm text-[#6B6B6B]">Tournament Player</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}