export const metadata = {
  title: "Great Light Model School",
  description: "Great Light Model School Management Portal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
