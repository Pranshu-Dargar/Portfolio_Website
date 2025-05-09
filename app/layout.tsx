import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script'; // Add this import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pranshudargar.in'),
  title: 'Pranshu Dargar | Full Stack Developer',
  description: 'Professional portfolio of Pranshu Dargar, a Full Stack Developer specializing in modern web technologies.',
  icons: {
    icon: "https://res.cloudinary.com/da1iuokin/image/upload/v1746819995/favicon-32x32_modwss.png",
    shortcut: "https://res.cloudinary.com/da1iuokin/image/upload/v1746819794/favicon_ugwkvt.ico",
    apple: "https://res.cloudinary.com/da1iuokin/image/upload/v1746819883/apple-touch-icon_ekorlr.png"
  },
  keywords: 'web developer, portfolio, react, next.js, frontend, backend, full stack, software developer, node.js',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pranshudargar.in',
    title: 'Pranshu Dargar | Full Stack Developer',
    description: 'Professional portfolio of Pranshu Dargar, a Full Stack Developer specializing in modern web technologies.',
    siteName: 'Pranshu Dargar Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1K6WFDL5B1"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
