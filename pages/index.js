import Head from 'next/head'

import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'

import utilStyles from '../styles/utils.module.css'

import { GeistProvider, CssBaseline } from '@geist-ui/react'

import { Text, Button , Card ,Spacer ,Row} from '@geist-ui/react'

const App = () => {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(lastThemeType => (lastThemeType === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider theme={{ type: themeType }}>
      <CssBaseline />
      <YourComponent onClick={switchThemes} />
    </GeistProvider>
  )
}


  
    
    
  
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
	  
	   <Card shadow>
        <Text h4><center>Hi there! I am John Andrew. Nice to meet you.</center></Text>
		<Text h4><center>You can send E-mail to my <Link href="mailto:xsxg123456@outlook.com">E-mail address</Link></center></Text>
		<Text h4><center>You can also follow my <Link href="https://www.github.com/w7xg">Github</Link> or <Link href="https://www.twitter.com/w7xg233">Twitter</Link></center></Text>
		<Text h4><center>Check out my <Link href="https://blog.w7xg.now.sh">Blog</Link>!</center></Text>
      </Card>
	  <Spacer y={2}/>
	 <footer>
	 <center>MIT License | Copyright © 2020-2021</center>
	 </footer>
      </section>
	 </Layout>
  )
}