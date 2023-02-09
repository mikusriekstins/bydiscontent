import Head from 'next/head'

import Hero from 'components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Discontent - Web design with purpose</title>
        <meta name="description" content="A selection of work designed to communicate function & purpose" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <h1>This is the hero</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>This is the hero</h2>
      </Hero>
    </>
  )
}
