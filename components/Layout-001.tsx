import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import TechStackGrid from './TechStackGrid';

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

      {/* Page wrapper */}
      <div className={styles.page}>
        {/* Page content */}
        <div className={styles.main}>
          {children}
        </div>
      </div>

      {/* Tech stack section */}
      <section style={{
        width: '100%',
        background: '#fafafa',
        padding: '4rem 2rem',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee'
      }}>
        <TechStackGrid />
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>
          © {new Date().getFullYear()} <strong>Psoluzioni Digital Studio</strong> · Modular CX · Commerce · Cloud · AI
        </span>
      </footer>
    </>
  );
}
