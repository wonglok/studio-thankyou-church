import Head from "next/head";

export default function Home() {
  return (
    <div className={"h-full"}>
      <Head>
        <title>Effect Node Studio About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>About Page</h1>
        <div>Here's a canvas below</div>
      </div>
    </div>
  );
}
