import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const initialUsers = [
  { username: 'test', password: 'test' },
];

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const signup = (username, password) => {
    if (users.find(u => u.username === username)) {
      return false;
    }
    setUsers([...users, { username, password }]);
    setUser({ username });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 