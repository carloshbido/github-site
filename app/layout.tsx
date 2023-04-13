import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "GitHub Site",
  description: "Next 13",
  keywords: "web development, webdesign",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
