import { createContext, useContext, useEffect, useState } from 'react';
import {
    AuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import type { AuthProviderOption, IAuthContext } from '@T/data';
import { auth } from '@db/auth';

const AuthContext = createContext<IAuthContext>({
    user: null,
    loading: false,
    signInApp: null,
    signOutApp: null,
});

const AuthContextProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [user, setUser] = useState<IAuthContext['user']>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authProviders: Record<AuthProviderOption, AuthProvider> = {
        google: new GoogleAuthProvider(),
    };
    const signInApp = (provider: AuthProviderOption) =>
        signInWithPopup(auth, authProviders[provider]);
    const signOutApp = async () => await signOut(auth);

    return (
        <AuthContext.Provider value={{ user, loading, signInApp, signOutApp }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth };

export default AuthContextProvider;
