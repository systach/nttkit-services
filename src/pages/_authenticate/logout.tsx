import type { PageWithLayout } from "@T/pages";
import { ProtectedRoute } from "@components/auth";
import { useAuth } from "@components/ctx"
import { SIGNIN_ROUTE } from "@utils/const";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout: PageWithLayout = () => {

    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            auth.signOutApp()
        }

        if (!auth.user) {
            router.push(SIGNIN_ROUTE)
        }

    }, [])


    return <ProtectedRoute />
}

Logout.getLayout = (page) => page;

export default Logout;