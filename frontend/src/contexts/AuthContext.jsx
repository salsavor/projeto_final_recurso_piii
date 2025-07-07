import { createContext, useContext, useState } from "react";
import AuthService from "../services/auth.service";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Provider do contexto
export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(undefined);

  useEffect(() => {
    // Verifica se há token salvo (ex: localStorage) e valida com o servidor
    const checkAuth = async () => {
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        try {
          // Exemplo: validação do token no backend
          const res = await AuthService.validateToken(savedToken);
          if (res.ok) {
            setToken(savedToken);
            setIsAuthenticated(true);
            setUserRole(res.role); // role retornada pelo backend
          } else {
            setToken(null);
            setIsAuthenticated(false);
            setUserRole(undefined);
          }
        } catch {
          setToken(null);
          setIsAuthenticated(false);
          setUserRole(undefined);
        }
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    const data = await AuthService.login(email, password);
    //setUser(data.user);
    setToken(data.AccessToken);
    localStorage.setItem("token", data.AccessToken);
    setIsAuthenticated(true);
    setUserRole(data.role); // role retornada pelo backend
  };

  const logout = () => {
    //setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    setUserRole(undefined);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, isLoading, userRole, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
