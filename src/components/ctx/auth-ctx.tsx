import { createContext, useContext } from 'react';

const AuthContext = createContext({});

const AuthContextProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth };

export default AuthContextProvider;
