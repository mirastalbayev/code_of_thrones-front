import { useState } from 'react';
import AuthContext from './AuthContext';

interface IProps {
	children: React.ReactNode;
}

export function AuthProvider({ children }: IProps) {
	const [user, setUser] = useState<User | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
