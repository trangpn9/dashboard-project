import React, {createContext, useState} from 'react';
import { fakeAuthProvider } from './../utils/auth';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider ({ children }: { children: React.ReactNode }) {

  let [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setIsAuthenticated(true);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setIsAuthenticated(false);
      callback();
    });
  };

  let value = { user, signin, signout, isAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export {AuthContext, AuthProvider};