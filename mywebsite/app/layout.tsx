import Link from "next/link";
import '../styles/global.css'

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
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Vignesh Iyer</h1>
        </Link>
        <p className="text-slate-300">My personal blog.</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border border-slate-600 mt-6 py-6 text-center text-slate-400 rounded-md">
        <p>© 2023 Vignesh Iyer</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
