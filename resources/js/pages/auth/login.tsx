import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head, Link } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <>
            <Head title="Log in | Diro" />
            
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
                            Welcome <span className="text-[#D1D3D4]">Back</span>
                        </h2>
                        <p className="font-[Quicksand] text-[#6B6B6B] mt-2">
                            Log in to manage your court reservations
                        </p>
                    </div>

          
                    {status && (
                        <div className="mb-6 text-center bg-[#F5F5F5] rounded-lg p-4">
                            <p className="font-[Quicksand] text-sm font-semibold text-black">
                                {status}
                            </p>
                        </div>
                    )}

               
                    <div className="bg-[#F5F5F5] rounded-xl p-8 shadow-lg">
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="flex flex-col gap-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                 
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
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                                        />
                                        <InputError message={errors.email} className="font-[Quicksand] text-sm mt-1" />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <Label 
                                                htmlFor="password"
                                                className="font-[Quicksand] font-semibold text-sm"
                                            >
                                                Password
                                            </Label>
                                            {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    className="font-[Quicksand] text-sm text-[#6B6B6B] hover:text-black transition duration-300"
                                                    tabIndex={5}
                                                >
                                                    Forgot password?
                                                </TextLink>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="Enter your password"
                                            className="w-full p-3 rounded-lg border-2 border-[#D1D3D4] font-[Quicksand] focus:outline-none focus:border-black transition duration-300 bg-white"
                                        />
                                        <InputError message={errors.password} className="font-[Quicksand] text-sm mt-1" />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            tabIndex={3}
                                        />
                                        <Label 
                                            htmlFor="remember"
                                            className="font-[Quicksand] text-sm"
                                        >
                                            Remember me
                                        </Label>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-black text-white font-[Quicksand] font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-xl mt-2"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing && <Spinner />}
                                        Log In
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>

                    {canRegister && (
                        <div className="text-center mt-6">
                            <p className="font-[Quicksand] text-[#6B6B6B]">
                                Don't have an account?{' '}
                                <TextLink 
                                    href={register()} 
                                    tabIndex={5}
                                    className="font-[Quicksand] font-semibold text-black hover:underline"
                                >
                                    Sign up
                                </TextLink>
                            </p>
                        </div>
                    )}

                
                </div>
            </div>
        </>
    );
}