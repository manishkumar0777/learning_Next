import './globals.css'


export default function AppLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>

  )
}