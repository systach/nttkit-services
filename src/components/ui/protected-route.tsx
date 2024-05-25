import { useAuth } from '@components/ctx';
import { PageRoot } from '@components/ui/page-root';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type IProtectedRoute = {
    className?: string
} & React.PropsWithChildren

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children, className = "" }) => {
    const router = useRouter();
    const auth = useAuth();

    useEffect(() => {
        if (!auth.user) {
            router.push('/');
        }
    }, [router, auth.user]);

    if (!auth.user) return null;

    return auth.user && <PageRoot isProtected className={twMerge(className)}>{children}</PageRoot>;
};

ProtectedRoute.displayName = "protectedroute"
