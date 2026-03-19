import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/contexts/theme-context";
import { ScrollRestoration } from "@/components/ui/scroll-restoration";
import { ForceScrollTop } from "@/components/ui/force-scroll-top";

/** Body + UI — readable, modern SaaS / landing */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

/** Headlines — tech / crypto feel */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  weight: ["500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "WOR — War Oil Reserve",
  description:
    "War Oil Reserve ($WOR): true power stored in energy, not currency. A decentralized symbol of stored strength — the reserve behind the chaos.",
  keywords: ["WOR", "War Oil Reserve", "crypto", "token", "blockchain"],
  authors: [{ name: "War Oil Reserve" }],
  creator: "War Oil Reserve",
  publisher: "War Oil Reserve",
  robots: "index, follow",
  openGraph: {
    title: "WOR — War Oil Reserve",
    description:
      "War Oil Reserve ($WOR): true power stored in energy, not currency. A decentralized symbol of stored strength — the reserve behind the chaos.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOR — War Oil Reserve",
    description:
      "War Oil Reserve ($WOR): true power stored in energy, not currency. A decentralized symbol of stored strength — the reserve behind the chaos.",
  },
  icons: {
    icon: [
      { url: "/images/logo.jpg", sizes: "64x64", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  other: { "msapplication-TileColor": "#0066cc" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${pressStart2P.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/images/logo.jpg" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WOR — War Oil Reserve" />
        <link rel="icon" href="/images/logo.jpg" sizes="64x64" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <link rel="preload" href="/globals.css" as="style" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#000",
                color: "#fff",
                border: "2px solid rgb(0, 102, 204)",
              },
            }}
          />
          <ScrollRestoration />
          <ForceScrollTop />
        </ThemeProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Tratamento de erros globais
              window.addEventListener('error', function(e) {
                // Ignorar erros de extensões/scripts externos
                if (e.filename && (e.filename.includes('extension://') || e.filename.includes('solanaActionsContentScript'))) {
                  e.preventDefault();
                  return false;
                }
              });
              
              window.addEventListener('unhandledrejection', function(e) {
                // Ignorar promises rejeitadas de extensões
                if (e.reason && e.reason.toString().includes('solanaActionsContentScript')) {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Limpar caches existentes e desabilitar service worker durante desenvolvimento
              if ('serviceWorker' in navigator) {
                // Limpar todos os caches existentes
                caches.keys().then(function(cacheNames) {
                  return Promise.all(
                    cacheNames.map(function(cacheName) {
                      console.log('Removendo cache:', cacheName);
                      return caches.delete(cacheName);
                    })
                  );
                }).then(function() {
                  console.log('Todos os caches foram limpos');
                });

                // Desregistrar service workers existentes
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let registration of registrations) {
                    console.log('Removendo service worker:', registration);
                    registration.unregister();
                  }
                });
              }
              
              
              // Controle de scroll para prevenir scroll automático
              const controlScroll = () => {
                // Salvar posição do scroll
                let scrollPosition = 0;
                
                window.addEventListener('beforeunload', () => {
                  scrollPosition = window.scrollY;
                  sessionStorage.setItem('scrollPosition', scrollPosition.toString());
                });
                
                // Prevenir scroll automático de forma mais agressiva
                const preventAutoScroll = () => {
                  // Sempre forçar scroll para o topo no carregamento inicial
                  window.scrollTo(0, 0);
                  
                  // Verificar se há posição salva
                  const saved = sessionStorage.getItem('scrollPosition');
                  if (saved) {
                    const position = parseInt(saved, 10);
                    // Só restaurar se a posição for maior que 100px (não no topo)
                    if (position > 100) {
                      setTimeout(() => {
                        window.scrollTo(0, position);
                        sessionStorage.removeItem('scrollPosition');
                      }, 50);
                    } else {
                      // Se estava no topo, forçar para o topo
                      window.scrollTo(0, 0);
                      sessionStorage.removeItem('scrollPosition');
                    }
                  }
                };
                
                // Executar quando a página carregar
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', preventAutoScroll);
                } else {
                  preventAutoScroll();
                }
                
                // Executar após um delay para garantir que tudo carregou
                setTimeout(preventAutoScroll, 100);
                setTimeout(preventAutoScroll, 500);
                
                // Forçar scroll para o topo em vários momentos
                window.addEventListener('focus', () => window.scrollTo(0, 0));
                window.addEventListener('blur', () => window.scrollTo(0, 0));
              };
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', controlScroll);
              } else {
                controlScroll();
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
