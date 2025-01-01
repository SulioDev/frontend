import "./globals.css";

const metadata = {
  title: "Sulio Art",
  description: "Sulio Art | Artist AI Chatbot",
  other: {
    'facebook-domain-verification': 'domwcotoevocvy9k2s82nabc8fz87j'
  }
};

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html className="bg-black text-white">
      <body>
        {children}
      </body>
    </html>
  );
}
