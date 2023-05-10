import { createContext } from 'react';

export interface User {
	id: number;
	email: string;
}

interface AuthContextValue {
	user: User | null;
	setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextValue>({
	user: null,
	setUser: () => {},
});

export default AuthContext;
