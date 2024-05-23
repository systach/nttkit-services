import type { GetServerSidePropsContext } from 'next';
import type { PageWithLayout } from '@T/pages';
import { useAuth } from '@components/ctx';
import { WithHead } from '@components/meta';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SIGNIN_ROUTE } from '@utils/const';

type Props = {};

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
    return { props: {} };
};

const Home: PageWithLayout<Props> = () => {

    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            router.push("/dashboard")
        }
        if (!auth.user) {
            router.push(SIGNIN_ROUTE)
        }
    }, [])

    return (
        <WithHead
            title="Potluck Party | Create & Share Potluck Party!"
            description="Potluck Party platform provides various features to create, plan, and share potluck party event with loved ones."
        >
        </WithHead>
    )
};

Home.getLayout = (page) => page;

export default Home;
