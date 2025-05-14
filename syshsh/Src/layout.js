import "./globals.css";

export const metadata = {
  title: "Happy-Birthday-Annie",
  description: "A special Birthday Gift for you Moi everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
