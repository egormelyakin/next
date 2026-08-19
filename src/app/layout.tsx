import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en" style={{ colorScheme: "dark" }}>
      <body>{children}</body>
    </html>
  );
}
