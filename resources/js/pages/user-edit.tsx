import { useForm } from '@inertiajs/react';
import Navbar from '@/components/navbar-home';
import Footer from '@/components/footer-diro';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface UserEditDetailsProps {
    user: User;
}

export default function EditUser({ user }: UserEditDetailsProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name ?? '',
        email: user.email ?? '',
        role: user.role ?? '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/user/edit/${user.id}`);
    };

    return (
        <>
            <title>Edit User | Diro</title>
            <Navbar />

            <div className="min-h-screen bg-white py-12">
                <div className="bg-gradient-to-b from-[#F5F5F5] to-white py-16 px-8 mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="font-[Quicksand] font-bold text-5xl mb-4">
                            Edit <span className="text-[#D1D3D4]">User</span>
                        </h1>
                        <p className="font-[Quicksand] text-xl text-[#6B6B6B]">
                            Update user information
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto px-8">
                    <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F5F5F5]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="name" className="font-[Quicksand] font-semibold text-base mb-3 block">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Enter full name"
                                    className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] text-base focus:outline-none focus:border-black transition duration-300 bg-white"
                                    required
                                />
                                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                            </div>

                            <div>
                                <label htmlFor="email" className="font-[Quicksand] font-semibold text-base mb-3 block">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                    className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] text-base focus:outline-none focus:border-black transition duration-300 bg-white"
                                    required
                                />
                                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                            </div>

                            <div>
                                <label htmlFor="role" className="font-[Quicksand] font-semibold text-base mb-3 block">
                                    User Role
                                </label>
                                <select
                                    id="role"
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                    className="w-full p-4 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] text-base focus:outline-none focus:border-black transition duration-300 bg-white"
                                    required
                                >
                                    <option value="" disabled>
                                        Select a role
                                    </option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                                {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
                            </div>

                            <div className="flex gap-4 mt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 bg-black text-white font-[Quicksand] font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-xl disabled:opacity-50"
                                >
                                    {processing ? 'Saving...' : 'Save Changes'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="flex-1 bg-white text-black font-[Quicksand] font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-lg border-2 border-[#F5F5F5]"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </>
    );
}