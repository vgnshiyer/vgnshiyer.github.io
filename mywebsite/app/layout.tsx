import Link from "next/link";

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
      <Link href="/">
        <h1>Vignesh Iyer</h1>
      </Link>
      <p>My personal blog.</p>
    </header>
  );

  const footer = (
    <footer>
      <p>© 2023 Vignesh Iyer</p>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
