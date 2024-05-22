import { app } from '@db/app';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(app);
