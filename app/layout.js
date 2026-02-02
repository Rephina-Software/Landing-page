import './globals.css'

export const metadata = {
  title: 'Rephina Software Solutions',
  description: 'Enterprise quality software for South African SMEs. Custom Development, AI, and Power Platform solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
