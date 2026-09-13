"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useStore } from "zustand/react";

import createUserInterfaceStore, { type UserInterfaceStore } from "hooks/use-user-interface";
import type { UserInterface, UserInterfaceState } from "types/ui";

export const UserInterfaceContext = createContext<UserInterfaceStore | null>(null);

export function UserInterfaceProvider({ children, init }: { children: React.ReactNode; init: UserInterface }) {
  const [store] = useState<UserInterfaceStore>(() => createUserInterfaceStore(init));

  return (
    <UserInterfaceContext.Provider value={store}>
      <ThemeSync />
      {children}
    </UserInterfaceContext.Provider>
  );
}

function ThemeSync() {
  const theme = useUserInterface((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return null;
}

export function useUserInterface<T>(selector: (state: UserInterfaceState) => T): T {
  const store = useContext(UserInterfaceContext);
  if (!store) throw new Error("Missing UserInterfaceContext.Provider in the tree");
  return useStore(store, selector);
}
