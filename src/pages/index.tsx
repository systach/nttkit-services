import type { PageWithLayout } from '@T/pages';
import type { GetServerSidePropsContext } from 'next';

type Props = {};

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
    return { props: {} };
};

const Home: PageWithLayout<Props> = () => {
    return <div>Home!</div>;
};

Home.getLayout = (page) => page;

export default Home;
