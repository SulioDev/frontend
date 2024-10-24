import "./globals.css";

export const metadata = {
  title: "Sulio Art",
  description: "Sulio Art | Artist AI Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-black text-white">
      <body>
        {children}
      </body>
    </html>
  );
}
