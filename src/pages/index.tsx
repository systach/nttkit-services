import type { GetServerSidePropsContext } from 'next';
import type { PageWithLayout } from '@T/pages';
import { useAuth } from '@components/ctx';
import { WithHead } from '@components/ui/with-head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { APP_NAMES, SIGNIN_ROUTE } from '@utils/const';

type Props = {};

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
    return { props: {} };
};

const Home: PageWithLayout<Props> = () => {
    const auth = useAuth();
    const router = useRouter();

    // THIS PAGE WILL REDIRECT IF
    // 1) to main user panel if auth user DO exist
    // 2) to sign in page if auth user DOES NOT exist
    useEffect(() => {
        if (auth.user) {
            router.push('/dashboard');
        }
        if (!auth.user) {
            router.push(SIGNIN_ROUTE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <WithHead
            title={APP_NAMES['en']}
            description={""}
        />
    );
};

Home.getLayout = (page) => page;

export default Home;
