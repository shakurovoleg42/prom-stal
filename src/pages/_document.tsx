import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="yandex-verification" content="1fcc8e93c760e8a4" />
        <meta
          name="google-site-verification"
          content="UH2nxUzTfV2wXB8BkKLZ3z_3Dj32tDD5DFHc_Lz1KNA"
        />
        {/* Yandex.Metrika counter */}
        <script type="text/javascript">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99479272, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99479272"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R6XCKJ5ZK"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7R6XCKJ5ZK');
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
