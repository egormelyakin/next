import { cookies } from "next/headers";

import { UserInterfaceProvider } from "components/user-interface-store";
import { parseUserInterfaceStateCookie, userInterfaceCookie } from "hooks/use-user-interface";

import "./globals.css";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const init = parseUserInterfaceStateCookie((await cookies()).get(userInterfaceCookie)?.value);

  return (
    <html className={init.theme} lang="en" style={{ colorScheme: init.theme }} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <UserInterfaceProvider init={init}>{children}</UserInterfaceProvider>
      </body>
    </html>
  );
}
