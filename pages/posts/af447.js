import Head from 'next/head'

import Link from 'next/link'

import Layout from '../../components/layout'

import utilStyles from '../../styles/utils.module.css'

import { GeistProvider, CssBaseline } from '@geist-ui/react'

import { Text, Button , Card ,Spacer ,Row ,Image} from '@geist-ui/react'


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
export default function () {
  return (
    <Layout>
      <Head>
        <title>AF447</title>
      </Head>
      <section className={utilStyles.headingMd}>
	 <Text h4>
	  <center><iframe src="https://player.bilibili.com/player.html?aid=554745&bvid=BV1Cs411Z7hm&cid=825847&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="500" height="400"> </iframe></center>
	  <Spacer y={2}/>
	  <Row>法国航空447号班机原定由巴西里约热内卢加利昂国际机场飞往法国巴黎戴高乐机场。2009年6月1日，该航班一架空中客车A330-203客机（注册编号：F-GZCP），载有216名乘客以及12名机组人员，在巴西圣佩德罗和圣保罗岛屿附近坠毁，机上人员全数罹难。此空难为法国航空成立以来最严重的空难，亦是A330最严重及首次商业飞行空难。</Row>
	  <Spacer y={2}/>
<Row>事发后首五天，巴西海军找到飞机的大型残骸及两具尸体，但揭露空难原因的飞行纪录仪直到2011年5月在大西洋海底才找到。空难最后调查报告于2012年7月5日的新闻发布会上公布，指出皮托管（pitot tube）结冰使飞机未能侦测空速，自动驾驶自动关闭，机员错误操作导致失速，最后酿成空难。法国政府决定把6月8日定为全国哀悼日。</Row>
	  </Text>
</section>
	 </Layout>
  )
}