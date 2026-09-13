import z from "zod";

export const THEME = ["light", "dark"] as const;

export const userInterface = z.object({ theme: z.enum(THEME).default("dark") });

export type UserInterface = z.infer<typeof userInterface>;

export interface UserInterfaceState extends UserInterface {
  setUserInterface: (patch: Partial<UserInterface>) => void;
}
