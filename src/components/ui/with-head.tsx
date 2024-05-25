import type { PageWithLayout } from '@T/pages';
import Head from 'next/head';

type IWithHead = {
    title: string;
    description: string;
} & React.PropsWithChildren;

export const WithHead: PageWithLayout<IWithHead> = ({ children, ...meta }) => {

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

WithHead.displayName = "withhead"
