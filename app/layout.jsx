import "./globals.css";

export const metadata = {
  title: "Girard Music and Drama Boosters",
  description: "K–12 arts across Girard School District",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

