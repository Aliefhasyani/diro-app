import Navbar from "@/components/navbar-home";
import Footer from "@/components/footer-diro";
import { Link } from "@inertiajs/react";

export default function About() {
  return (
    <>
      <title>About | Diro</title>
      <Navbar />

      <div className="min-h-screen bg-white py-12 pt-20  ">
   
        <div className=" py-16 px-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/images/shuttlecock.png"
              alt="Shuttlecock"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h1 className="font-[Quicksand] font-bold text-5xl mb-4">
              About <span className="text-[#D1D3D4]">Diro</span>
            </h1>
            <p className="font-[Quicksand] text-xl text-[#6B6B6B]">
              Test credentials and platform information
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8">
     
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F5F5F5] mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">👑</span>
              <h2 className="font-[Quicksand] font-bold text-3xl">
                Admin User Login
              </h2>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-1">📧</span>
                <div>
                  <p className="font-[Quicksand] font-semibold text-sm text-[#6B6B6B] mb-1">
                    Email
                  </p>
                  <p className="font-[Quicksand] font-bold text-lg text-black bg-white px-4 py-2 rounded-lg">
                    aliefhasyani@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-1">🔑</span>
                <div>
                  <p className="font-[Quicksand] font-semibold text-sm text-[#6B6B6B] mb-1">
                    Password
                  </p>
                  <p className="font-[Quicksand] font-bold text-lg text-black bg-white px-4 py-2 rounded-lg">
                    2830121262
                  </p>
                </div>
              </div>
            </div>

                
          </div>

        
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F5F5F5] mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">👤</span>
              <h2 className="font-[Quicksand] font-bold text-3xl">
                Normal User Login
              </h2>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">✍️</div>
              <p className="font-[Quicksand] font-bold text-xl text-black mb-2">
                Create Your Own Account
              </p>
              <p className="font-[Quicksand] text-base text-[#6B6B6B] mb-6">
                Register a new account to test the normal user experience
              </p>
        
              <Link
                href="/register"
                className="inline-block bg-black text-white font-[Quicksand] font-bold px-8 py-4 rounded-lg hover:scale-105 transition duration-300 shadow-xl">
                              Go to Registration
              </Link>
            </div>
          </div>

       
       
        </div>
      </div>

      <Footer />
    </>
  );
}