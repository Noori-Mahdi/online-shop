import NavBar from '@/ui/NavBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-screen">
      <NavBar />
      {children}
    </div>
  )
}
