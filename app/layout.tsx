import SocialHandles from '@/components/SocialHandles';
import '../styles/global.css'
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'vgnshiyer\'s blog',
  description: 'vgnshiyer\'s personal blog.',
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
      <div className="mt-6 py-6 mb-20 text-tertiary-light dark:text-tertiary-dark text-center">
        <SocialHandles />
        <p>© 2024 Vignesh Iyer</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <link rel='icon' href='images/favicon.ico' />
      <body className="bg-light dark:bg-dark">
        <div className="mx-auto max-w-9/10 md:max-w-3/4 lg:max-w-2/3 selection:bg-contrast-dark dark:selection:text-light">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
