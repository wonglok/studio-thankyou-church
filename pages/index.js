import Head from "next/head";

export default function Home() {
  return (
    <div className={"h-full"}>
      <Head>
        <title>LokLok.Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello</h1>
        <div>Welcome to My Site</div>
        <div>Here's a canvas below</div>
      </div>
    </div>
  );
}
