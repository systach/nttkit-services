import { PageWithLayout } from '@T/pages';
import { useAuth } from '@components/ctx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login: PageWithLayout = () => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            router.push('/protect');
        }
    }, [router, auth.user]);

    return (
        !(auth.loading || auth.user) && (
            <main>
                <button type="button" onClick={auth.signInApp}>
                    Sign In With Google
                </button>
            </main>
        )
    );
};

Login.getLayout = (page) => page;

export default Login;
