import type { LanguageOption } from '@T/data';

// NAMING CONST

export const APP_NAME_ENGLISH = 'NTTKIT';
export const APP_NAMES: Record<LanguageOption, string> = {
    en: APP_NAME_ENGLISH,
};
// STATIC PARAGRAPHS CONST

export const APP_LOGIN_TERMS_ENGLISH = `Once login with one of the providers above, we are utilizing the information provided by the provider within this application.`;
export const APP_LOGIN_TERMS: Record<LanguageOption, string> = {
    en: APP_LOGIN_TERMS_ENGLISH,
};
// ROUTE CONST

export const AFTER_SIGNIN_ROUTE = '/dashboard';
export const SIGNIN_ROUTE = '/_authenticate/login';
export const BEFORE_SIGNOUT_ROUTE = '/_authenticate/logout';
