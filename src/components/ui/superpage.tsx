import { useRouter } from "next/router"

const SuperPage: React.FC<React.PropsWithChildren> = ({ children }) => {

    const router = useRouter();

    return (
        <div data-component={SuperPage.name} data-viewing={router.pathname} role="main">
            {children}
        </div>
    )
}


export default SuperPage;
