import Head from 'next/head'

import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'

import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><center>Hi there! I am John Andrew. Nice to meet you.</center></p>
        <p>
          
        </p>
      </section>
	 </Layout>
  )
}