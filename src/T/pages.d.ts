import type { NextPage } from 'next';
import type { ComponentType, ReactElement, ReactNode } from 'react';

type GetLayoutProps = (_page: ReactElement) => ReactNode;

export interface IPageWithLayout {
    getLayout?: GetLayoutProps;
    layout?: ComponentType;
}
export type PageWithLayout<P extends {} = {}> = NextPage<P> & IPageWithLayout;
