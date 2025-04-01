import { create } from "zustand";

interface AuthState {
  userEmail: string | null;
  isAuthenticated: boolean;
  setUserEmail: (email: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userEmail: null,
  isAuthenticated: false,
  setUserEmail: (email: string) => set({ userEmail: email }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));
