import { createContext } from "react";


const AuthProvider = createContext({})

export function AuthProvider({ children }) {

    const [user, setUser] = useState({});

    const signIn = (email, password) => {
        setUser({id:1, name: 'User',})
    }

    return(
      <AuthProvider.Provider value={{}}>
        {children}</AuthProvider.Provider>
    );
}