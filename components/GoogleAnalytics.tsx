import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-G6R4G3K899';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              linker: {
                domains: ['psoluzioni.com', 'psoluzioni-pcx.vercel.app']
              }
            });
          `,
        }}
      />
    </>
  );
}
