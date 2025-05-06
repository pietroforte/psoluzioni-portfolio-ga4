import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children, title = 'Psoluzioni Digital Studio' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        id="tawkto-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/68195676affc0219158afe98/1iqhfjfmk';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `
        }}
      />

      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
        {children}
      </main>

      <footer className="text-center text-sm text-gray-600 mt-16 mb-6 px-4">
        © {new Date().getFullYear()} <strong>Psoluzioni Digital Studio</strong> · Modular CX · Commerce · Cloud · AI
      </footer>
    </>
  );
}
