import "./globals.css";

export const metadata = {
  title: "Siddhesh | Full-Stack Developer",
  description:
    "Portfolio of Siddhesh — IT Graduate, Full-Stack Developer and SaaS Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}