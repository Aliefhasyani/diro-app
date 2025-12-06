import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F5] pt-16 pb-8 border-t border-gray-200 w-full font-[Quicksand]">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
                    
                    <div className="col-span-1 md:col-span-1">
                        <p className="font-bold text-2xl mb-4 tracking-tight">DIRO</p>
                        <p className="text-[#6B6B6B] text-sm leading-relaxed">
                            Your trusted platform for badminton court reservations. fast, secure, and always ready for your next game.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm text-[#6B6B6B]">
                            <li>
                                <Link href="/" className="hover:text-black transition-colors duration-200">Home</Link>
                            </li>
                            <li>
                                <Link href="/reservations" className="hover:text-black transition-colors duration-200">Book a Court</Link>
                            </li>
                            <li>
                                <Link href="/schedule" className="hover:text-black transition-colors duration-200">Check Schedule</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-black transition-colors duration-200">Pricing</Link>
                            </li>
                        </ul>
                    </div>

           
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-[#6B6B6B]">
                            <li>
                                <Link href={`/about`} className="hover:text-black transition-colors duration-200">About Us</Link>
                            </li>
                            <li>
                                <p className="hover:text-black transition-colors duration-200">Contact Support</p>
                            </li>
                            <li>
                                <p  className="hover:text-black transition-colors duration-200">Terms of Service</p>
                            </li>
                            <li>
                                <p className="hover:text-black transition-colors duration-200">Privacy Policy</p>
                            </li>
                        </ul>
                    </div>

                  
                    <div>
                        <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-3 text-sm text-[#6B6B6B]">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <span>📧</span>
                                <span>aliefhasyani@gmail.com</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <span>📞</span>
                                <span>+62 895418484496</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <span>📍</span>
                                <span>Makassar, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

            
                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#6B6B6B] text-sm">
                        © {new Date().getFullYear()} Diro. All rights reserved.
                    </p>
                    
                    <div className="flex gap-6">
                      
                        <a href="#" className="text-[#6B6B6B] hover:text-black transition-colors hover:scale-110 transform duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" className="text-[#6B6B6B] hover:text-black transition-colors hover:scale-110 transform duration-200">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0 1.83c-2.65 0-2.976.01-4.023.058-.75.034-1.15.15-1.42.254-.355.138-.609.305-.877.573-.268.268-.435.522-.573.877-.105.27-.22.67-.254 1.42-.048 1.047-.058 1.373-.058 4.023 0 2.65.01 2.976.058 4.023.034.75.15 1.15.254 1.42.138.355.305.609.573.877.268.268.522.435.877.573.27.105.67.22 1.42.254 1.047.048 1.373.058 4.023.058 2.65 0 2.976-.01 4.023-.058.75-.034 1.15-.15 1.42-.254.355-.138.609-.305.877-.573.268-.268.435-.522.573-.877.105-.27.22-.67.254-1.42.048-1.047.058-1.373.058-4.023 0-2.65-.01-2.976-.058-4.023-.034-.75-.15-1.15-.254-1.42-.138-.355-.305-.609-.573-.877-.268-.268-.522-.435-.877-.573-.27-.105-.67-.22-1.42-.254-1.047-.048-1.373-.058-4.023-.058zM12.315 5.83a6.17 6.17 0 110 12.34 6.17 6.17 0 010-12.34zm0 1.83a4.34 4.34 0 100 8.68 4.34 4.34 0 000-8.68z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}