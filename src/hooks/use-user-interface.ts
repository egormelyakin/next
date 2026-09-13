import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { z } from "zod";
import { createStore } from "zustand";
import { type StateStorage, createJSONStorage, persist } from "zustand/middleware";

import { type UserInterface, type UserInterfaceState, userInterface } from "types/ui";

export const userInterfaceCookie = "ui";

const persistedUserInterfaceState = z.object({ state: userInterface, version: z.number().optional() });

const CookieStorage: StateStorage = {
  getItem: async (name) => (await getCookie(name)) ?? null,
  setItem: (name, value) => setCookie(name, value, { maxAge: 60 * 60 * 24 * 365, path: "/", sameSite: "lax" }),
  removeItem: (name) => deleteCookie(name, { path: "/" }),
};

export function parseUserInterfaceStateCookie(cookie: string | undefined): UserInterface {
  if (!cookie) return userInterface.parse({});

  try {
    const parsed = persistedUserInterfaceState.safeParse(JSON.parse(cookie));
    return parsed.success ? parsed.data.state : userInterface.parse({});
  } catch {
    return userInterface.parse({});
  }
}

export default function createUserInterfaceStore(initProps: UserInterface) {
  return createStore<UserInterfaceState>()(
    persist((set) => ({ ...initProps, setUserInterface: (patch) => set(patch) }), {
      name: userInterfaceCookie,
      partialize: (state) => userInterface.parse(state),
      skipHydration: true,
      storage: createJSONStorage(() => CookieStorage),
    }),
  );
}

export type UserInterfaceStore = ReturnType<typeof createUserInterfaceStore>;
