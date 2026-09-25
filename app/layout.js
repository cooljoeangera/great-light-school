export const metadata = {
  title: "Great Light School",
  description: "Great Light School website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
