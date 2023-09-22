import * as React from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'

type Prosp = {
  children?: React.ReactNode
}

const Main: React.FC<Prosp> = ({ children }) => {
  return (
    <>
        <Head>
            <title>Página</title>
        </Head>
        <main>
            <NavBar/>
            {children}
        </main>
    </>
  )
}

export default Main;