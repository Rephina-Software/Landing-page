import './globals.css'

export const metadata = {
  title: 'Rephina Software Solutions',
  description: 'Enterprise quality software for South African SMEs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-rephina-gold selection:text-rephina-dark">
        {children}
      </body>
    </html>
  )
}
