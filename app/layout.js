import "./globals.css";

export const metadata = {
  title: "Homemade Masala Kitchen | Homemade Indian Food Sydney",
  description:
    "Fresh homemade Indian food prepared to order, with pickup and delivery in selected Sydney suburbs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
