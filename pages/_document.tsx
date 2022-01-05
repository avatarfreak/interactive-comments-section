import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&amp;display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${prefix}/images/favicon-32x32.png`}
          />
        </Head>
        <body className="min-h-screen w-full text-base text-clr-neutral-200 font-sans bg-clr-neutral-400 px-8 py-4">
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
