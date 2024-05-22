import type { PageWithLayout } from '@T/pages';
import { WithHead } from '@components/meta';
import type { GetServerSidePropsContext } from 'next';

type Props = {};

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
    return { props: {} };
};

const Home: PageWithLayout<Props> = () => {
    return (
        <WithHead
            title="Potluck Party | Create & Share Potluck Party!"
            description="Potluck Party platform provides various features to create, plan, and share potluck party event with loved ones."
        >
            <div>Home</div>
        </WithHead>
    );
};

Home.getLayout = (page) => page;

export default Home;
