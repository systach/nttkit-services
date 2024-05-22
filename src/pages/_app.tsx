import '@css';
import type { AppProps } from 'next/app';
import type { PageWithLayout } from '@T/pages';
import { AuthContextProvider } from '@components/ctx';

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout;
}

const App = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props;
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <>
            {getLayout(
                <AuthContextProvider>
                    <Component {...pageProps} />
                </AuthContextProvider>
            )}
        </>
    );
};

export default App;
