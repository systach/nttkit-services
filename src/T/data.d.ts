import type { User, UserCredential } from 'firebase/auth';

export type LanguageOption = ['en'][number];

export type AuthProviderOption = ['google'][number];

export type IAuthContext = {
    user: User;
    loading: boolean;

    // eslint-disable-next-line no-unused-vars
    signInApp: (provider: AuthProviderOption) => Promise<UserCredential>;
    signOutApp: () => Promise<void>;
};
