import type { PageWithLayout } from '@T/pages';
import { ProtectedRoute } from '@components/auth';
import { useAuth } from '@components/ctx';
import { useRouter } from 'next/router';

const Protect: PageWithLayout = () => {
    const auth = useAuth();
    const router = useRouter();

    return (
        <ProtectedRoute>
            <main>
                <h1>Welcome!</h1>
                <p>This is protected route.</p>
                <button type="button" onClick={auth.signOutApp}>
                    Logout
                </button>
            </main>
        </ProtectedRoute>
        //    <main>
        //    <h1>Welcome!</h1>
        //    <p>This is protected route.</p>
        //    </main >
    );
};

Protect.getLayout = (page) => page;

export default Protect;
