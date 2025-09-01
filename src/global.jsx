import "@/styles"

import { Head } from "minista"

import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"

export default function ({ children, isHeaderFixed, title, url }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Stream Vibe | {title}</title>
        <script src="/src/main.js" type="module" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
      </Head>

      <Header isFixed={isHeaderFixed} url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
