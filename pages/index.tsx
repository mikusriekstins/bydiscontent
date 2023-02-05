import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Discontent - Web design with purpose</title>
        <meta name="description" content="A selection of work designed to communicate function & purpose" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        This is the content
      </div>
    </>
  )
}
