import { createContext, useContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    type User,
} from 'firebase/auth';
import type { IAuthContext } from '@T/data';
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
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }

        });
        setLoading(false);

        return () => unsubscribe();
    }, []);

    const signInApp = () => signInWithPopup(auth, new GoogleAuthProvider());
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
