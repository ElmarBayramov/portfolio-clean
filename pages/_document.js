import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document для контроля над HTML структурой
 * ЗАЧЕМ: Позволяет добавлять meta tags, шрифты, и другие элементы в <head>
 * ПОЛЬЗА: SEO оптимизация, предзагрузка критических ресурсов
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Elmar Bayramov - Award-Winning Marketing & Operations Leader | Data-Driven Strategist | Builder of High-Performance Business Systems" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}