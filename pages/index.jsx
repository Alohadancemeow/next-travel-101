import GlobalStyle from "../styles/GlobalStyle"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Discover from '../components/Discover'
import Video from '../components/Video'
import Contact from '../components/Contact'
import Experience from "../components/Experience"

export default function Home() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Hero />
        <About />
        <Discover />
        <Experience />
        <Video />
        <Contact />
      </Layout>
    </>
  )
}
