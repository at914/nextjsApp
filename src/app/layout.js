import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './globals.css'
import Header from './components/header/header'

const kyrial = LocalFont({src:"./components/fonts/KyrialSansPro-Black.otf"});
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Header/>{children}<h1 className={kyrial.className} style={{ backgroundColor: 'white' }}>Welcome</h1></body>
    </html>
  )
}
