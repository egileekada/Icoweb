import Head from 'next/head'
// import Image from 'next/image'
// import Navbar from '../home-components/components/Navbar' 
// import Script from 'next/script'
import HomeComponents from '../home-components/HomeComponents'

export default function index() {
  return (
    <div className=' w-full h-full'>  
      <Head>
        <title>Icoweb Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="p:domain_verify" content="c7200d132fcf020f2e8b8ba02a7e7489"/>
 
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10867698792"
        // strategy="afterInteractive"
      /> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10867698792"></script> 
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10867698792');
        `}
      </script>
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10867698792');
        `}
      </Script> */}
        {/* <!-- Global site tag (gtag.js) - Google Ads: 10867698792 --> */}
      </Head>
      <HomeComponents />
    </div>
  )
} 
