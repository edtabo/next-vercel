import * as React from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'


type Prosp = {
  children?: React.ReactNode
}

const Dark:React.FC<Prosp> = ({children}) => {
  return (
    <>
        <Head>
            <title>Página</title>
        </Head>
        <main style={{ background:"#333" }}>
            <NavBar/>
            {children}
        </main>
    </>
  )
}

export default Dark;
