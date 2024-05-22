import { useAuth } from '@components/ctx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    const auth = useAuth();

    useEffect(() => {
        if (!auth.loading) {
            if (!auth.user) {
                router.push('/');
            }
        }
    }, [router, auth.user]);

    if (auth.loading) return null;

    return (
        auth.user && (
            <div data-desc="protected-route" data-route={router.pathname}>
                {children}
            </div>
        )
    );
};

export default ProtectedRoute;
