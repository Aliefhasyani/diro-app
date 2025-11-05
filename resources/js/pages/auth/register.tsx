import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head, Link } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

export default function Register() {
    return (
        <>
            <Head title="Register | Diro" />
            
            <div className="min-h-screen bg-white flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <Link href="/" className="inline-block mb-6">
                            <h1 className="tracking-[0.1em] font-[Quicksand] font-bold text-4xl">
                                DIRO
                            </h1>
                        </Link>
                        <img
                            src="/images/shuttlecock.png"
                            alt="Shuttlecock"
                            className="w-16 h-16 mx-auto mb-6"
                        />
                        <h2 className="font-[Quicksand] font-bold text-2xl">
                            Create Your <span className="text-[#D1D3D4]">Account</span>
                        </h2>
                        <p className="font-[Quicksand] text-[#6B6B6B] mt-2">
                            Join Diro and start booking your courts today
                        </p>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-xl p-8 shadow-lg">
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password', 'password_confirmation']}
                            disableWhileProcessing
                            className="flex flex-col gap-5"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div>
                                        <Label 
                                            htmlFor="name"
                                            className="font-[Quicksand] font-semibold text-sm mb-2 block"
                                        >
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                                        />
                                        <InputError message={errors.name} className="font-[Quicksand] text-sm mt-1" />
                                    </div>

                                    <div>
                                        <Label 
                                            htmlFor="email"
                                            className="font-[Quicksand] font-semibold text-sm mb-2 block"
                                        >
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                            className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                                        />
                                        <InputError message={errors.email} className="font-[Quicksand] text-sm mt-1" />
                                    </div>

                                    <div>
                                        <Label 
                                            htmlFor="password"
                                            className="font-[Quicksand] font-semibold text-sm mb-2 block"
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Create a strong password"
                                            className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                                        />
                                        <InputError message={errors.password} className="font-[Quicksand] text-sm mt-1" />
                                    </div>

                                    <div>
                                        <Label 
                                            htmlFor="password_confirmation"
                                            className="font-[Quicksand] font-semibold text-sm mb-2 block"
                                        >
                                            Confirm Password
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Re-enter your password"
                                            className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                                        />
                                        <InputError message={errors.password_confirmation} className="font-[Quicksand] text-sm mt-1" />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-xl mt-2"
                                        tabIndex={5}
                                        data-test="register-user-button"
                                    >
                                        {processing && <Spinner />}
                                        Create Account
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>

            
                    <div className="text-center mt-6">
                        <p className="font-[Quicksand] text-[#6B6B6B]">
                            Already have an account?{' '}
                            <TextLink 
                                href={login()} 
                                tabIndex={6}
                                className="font-[Quicksand] font-semibold text-black hover:underline"
                            >
                                Log in
                            </TextLink>
                        </p>
                    </div>

                  
                </div>
            </div>
        </>
    );
}