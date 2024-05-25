import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

type IPageRoot = {
    isProtected?: boolean;
    className?: string
} & React.PropsWithChildren;

export const PageRoot: React.FC<IPageRoot> = ({ children, className = "", isProtected = false }) => {
    const router = useRouter();

    return (
        <div
            data-authorized={isProtected}
            data-ui={PageRoot.displayName}
            data-path={router.pathname}
            role="main"
            className={twMerge(className)}
        >
            {children}
        </div>
    );
};

PageRoot.displayName = 'pageroot';
