import "./globals.css";

export const metadata = {
  title: "Sulio Art",
  description: "Sulio Art | Artist AI Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-black text-white">
    <head>
    <meta name="facebook-domain-verification" content="domwcotoevocvy9k2s82nabc8fz87j" />
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}
