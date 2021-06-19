import React from 'react';

type Action = { type: 'login' } | { type: 'logout' };
type Dispatch = (action: Action) => void;
type State = { isLoggedIn: boolean };
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext =
  React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
    undefined,
  );

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'login': {
      return { isLoggedIn: true };
    }
    case 'logout': {
      return { isLoggedIn: false };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoggedIn: false,
  });
  const value = { state, dispatch };
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
