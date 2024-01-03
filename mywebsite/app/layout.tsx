import '../styles/global.css'
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Vignesh Iyer',
  description: 'My personal blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="my-4 md:my-6">
        <Navbar />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="mt-6 py-6  text-slate-400 text-center">
        <p>© 2023 Vignesh Iyer</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body className="bg-dark">
        <div className="mx-auto max-w-9/10 md:max-w-3/4 lg:max-w-2/3">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
