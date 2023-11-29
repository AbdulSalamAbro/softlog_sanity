import Header from '../components/Header'
import Banner from '../components/Banner'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header />
        <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-32">
           {children}
          </div>
      </body>
    </html>
  )
}
