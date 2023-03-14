import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  const data = {
    __html: `
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Meu Site",
    "url": "https://meusite.com/",
    "description": "Descrição do meu site.",
    "publisher": {
      "@type": "Organization",
      "name": "Nome da Empresa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://meusite.com/logo.png",
        "width": "600",
        "height": "60"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Seu Nome",
      "url": "https://meusite.com/sobre"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://meusite.com/imagem.png",
      "width": "1200",
      "height": "630"
    }
  }
`,
  }

  return (
    <Html lang="pt-br">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={data}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
