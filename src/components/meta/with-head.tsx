import type { PageWithLayout } from '@T/pages';
import { useRouter } from 'next/router';
import Head from 'next/head';

type Metadata = {
    title: string;
    description: string;
};

const WithHead: PageWithLayout<React.PropsWithChildren & Metadata> = ({
    children,
    ...meta
}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            {children}
        </>
    );
};

WithHead.getLayout = (page) => page;

export default WithHead;
