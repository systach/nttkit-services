import type { PageWithLayout } from '@T/pages';
import { useAuth } from '@components/ctx';
import { WithHead } from '@components/ui/with-head';
import { PageRoot } from '@components/ui/page-root';
import { AFTER_SIGNIN_ROUTE, APP_LOGIN_TERMS, APP_NAMES } from '@utils/const';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const Login: PageWithLayout = () => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            router.push(AFTER_SIGNIN_ROUTE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.user]);

    if (!auth.loading && auth.user) return null;

    return (
        <WithHead
            title="Login to Potluck Party"
            description="Potluck Party platform provides various features to create, plan, and share potluck party event with loved ones."
        >
            <PageRoot>
                <div className="h-screen flex justify-center items-center p-8">
                    <section className="border border-tree/25 p-8 shadow-xl shadow-highlight/25 rounded-md max-w-[500px]">
                        <article className="flex flex-col mb-4 lg:mb-5">
                            <h2 className="font-medium text-xl lg:text-2xl mb-0.5 text-tree">
                                Sign In
                            </h2>
                            <p className="font-light text-base lg:text-lg uppercase tracking-[0.075rem] text-tree/75">
                                to start {APP_NAMES['en']}.
                            </p>
                        </article>
                        <article className="flex flex-col gap-y-2.5 mb-4 lg:mb-5">
                            <button
                                type="button"
                                onClick={() => auth.signInApp('google')}
                                className="px-5 py-2.5 rounded-md border flex justify-start space-x-2.5 items-center lg:hover:border-neutral-900 lg:hover:text-neutral-600"
                            >
                                <FaGoogle className="text-lg lg:text-xl" />
                                <span>Continue with Google</span>
                            </button>
                            <button
                                type="button"
                                className="px-5 py-2.5 rounded-md border flex justify-start space-x-2.5 items-center lg:hover:border-neutral-900 lg:hover:text-neutral-600"
                            >
                                <FaFacebook className="text-lg lg:text-xl" />
                                <span>Continue with Facebook</span>
                            </button>
                            <button
                                type="button"
                                className="px-5 py-2.5 rounded-md border flex justify-start space-x-2.5 items-center lg:hover:border-neutral-900 lg:hover:text-neutral-600"
                            >
                                <FaTwitter className="text-lg lg:text-xl" />
                                <span>Continue with Twitter</span>
                            </button>
                        </article>
                        <article>
                            <p className="text-xs lg:text-sm font-light text-neutral-500 leading-[1.45]">
                                {APP_LOGIN_TERMS['en']}
                            </p>
                        </article>
                    </section>
                </div>
            </PageRoot>
        </WithHead>
    );
};

Login.getLayout = (page) => page;

export default Login;
