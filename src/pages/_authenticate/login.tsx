import type { PageWithLayout } from '@T/pages';
import { useAuth } from '@components/ctx';
import { WithHead } from '@components/meta';
import SuperPage from '@components/ui/superpage';
import { AFTER_SIGNIN_ROUTE } from '@utils/const';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa"

const Login: PageWithLayout = () => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            router.push(AFTER_SIGNIN_ROUTE);
        }
    }, [auth.user]);

    if (!auth.loading && auth.user) return null;

    return (
        <WithHead
            title="Login to Potluck Party"
            description="Potluck Party platform provides various features to create, plan, and share potluck party event with loved ones."
        >
            <SuperPage>
                <div className='h-screen flex justify-center items-center p-8'>
                    <section className='border border-tree/25 p-8 shadow-xl shadow-highlight/25 rounded-md max-w-[500px]'>
                        <article className='flex flex-col mb-4 lg:mb-5'>
                            <h2 className='font-medium text-xl lg:text-2xl mb-0.5 text-tree'>
                                Sign In
                            </h2>
                            <p className='font-light text-base lg:text-lg uppercase tracking-[0.075rem] text-tree/75'>to start potluck party.</p>
                        </article>
                        <article className='flex flex-col gap-y-2.5 mb-4 lg:mb-5'>
                            <button type="button" onClick={auth.signInApp} className='px-5 py-2.5 rounded-md border flex justify-start space-x-2.5 items-center text-tree border-grass lg:text-tree/50 lg:border-grass/25 lg:hover:border-grass lg:hover:text-tree'>
                                <FaGoogle className='text-lg lg:text-xl' />
                                <span>
                                    Continue with Google
                                </span>
                            </button>
                            <button type="button" className='px-5 py-2.5 rounded-md border flex justify-start space-x-2.5 items-center text-tree border-grass lg:text-tree/50 lg:border-grass/25 lg:hover:border-grass lg:hover:text-tree'>
                                <FaFacebook className='text-lg lg:text-xl' />
                                <span>
                                    Continue with Facebook
                                </span>
                            </button>
                            <button type="button" className='px-5 py-2.5 rounded-md border flex justify-start space-x-2.5 items-center text-tree border-grass lg:text-tree/50 lg:border-grass/25 lg:hover:border-grass lg:hover:text-tree'>
                                <FaTwitter className='text-lg lg:text-xl' />
                                <span>
                                    Continue with Twitter
                                </span>
                            </button>
                        </article>
                        <article>
                            <p className='text-xs lg:text-sm font-light text-neutral-500 leading-[1.45]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vel temporibus iste odio rem libero blanditiis ducimus alias.</p>
                        </article>
                    </section>
                </div>
            </SuperPage>
        </WithHead>
    )
};

Login.getLayout = (page) => page;

export default Login;
