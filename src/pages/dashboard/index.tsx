import type { PageWithLayout } from '@T/pages';
import { ProtectedRoute } from '@components/ui/protected-route';
import { useAuth } from '@components/ctx';
import { WithHead } from '@components/ui/with-head';
import { APP_NAMES } from '@utils/const';

const Dashboard: PageWithLayout = () => {
    const auth = useAuth();

    return (
        <ProtectedRoute className="h-screen flex flex-col text-center justify-center items-center">
            <WithHead
                title={
                    auth.user
                        ? `Dashboard @ ${auth.user.displayName}`
                        : `Dashboard @ Potluck Party`
                }
                description=""
            >
                <h1 className="font-bold text-xl mb-1">
                    Welcome to {APP_NAMES['en']} Dashboard
                </h1>
                <p className="font-light text-lg mb-3">
                    This is an authorized page (Dashboard)
                </p>
                <button
                    type="button"
                    onClick={auth.signOutApp}
                    className="px-5 py-2 rounded border font-medium uppercase tracking-[0.075rem] bg-neutral-900 text-white lg:hover:bg-neutral-600"
                >
                    Logout
                </button>
            </WithHead>
        </ProtectedRoute>
    );
};

Dashboard.getLayout = (page) => page;

export default Dashboard;
