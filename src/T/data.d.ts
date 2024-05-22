import type { User, UserCredential } from 'firebase/auth';

export type IAuthContext = {
    user: User;
    loading: boolean;

    signInApp: () => Promise<UserCredential>;
    signOutApp: () => Promise<void>;
};
