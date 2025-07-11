import AppFooter from '@/ui/AppFooter'
import NavBar from '@/ui/NavBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <NavBar/>
      {children}
      <AppFooter />
    </div>
  )
}
