import type { PageWithLayout } from '@T/pages';
import { ProtectedRoute } from '@components/ui/protected-route';
import { useAuth } from '@components/ctx';
import { WithHead } from '@components/ui/with-head';
import { SIGNIN_ROUTE } from '@utils/const';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Logout: PageWithLayout = () => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            auth.signOutApp();
        }

        if (!auth.user) {
            router.push(SIGNIN_ROUTE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProtectedRoute>
            <WithHead title="Logging Out..." description="" />
        </ProtectedRoute>
    );
};

Logout.getLayout = (page) => page;

export default Logout;
