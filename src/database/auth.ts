import { app } from '@database/app';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(app);
