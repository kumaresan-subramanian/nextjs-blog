import Link from 'next/link';
import Script from 'next/script'
import Head from 'next/head';
import { Layout } from '../../components/layout';

export default function FirstPost(){
  return(
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => 
          console.log(`script loaded`)
       } 
        />

      <h1>Hi From first page</h1>
      <Link href='/'> back to home</Link>
    </>
  ) 
}