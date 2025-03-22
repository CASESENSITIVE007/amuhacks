



import './globals.css'
export const metadata = {
  title: "Amuhacks",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body>
        {children}
      </body>
    </html>
  );
}
